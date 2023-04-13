import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { useToast } from 'vue-toast-notification';

let stompClient: Stomp.Client | null = null;
const $toast = useToast();

export function connect() {
  const socket = new SockJS(import.meta.env.VITE_BASE_WEB_SOCKET_URL, undefined, { server: "Bataknese App" });
  stompClient = Stomp.over(socket);
  stompClient.debug = f => f;

  stompClient.connect({ company: "Bataknese App", server: "AAA" }, function (__frame) {
    if (stompClient) {
      stompClient.subscribe(import.meta.env.VITE_BASE_WEB_SOCKET_TOPIC, function (message) {
        const notif = JSON.parse(message.body) as Message;
        $toast.open({
          message: `Data has been ${notif.eventName}`,
          type: notifTypeMapper(notif.eventName),
          position: 'top-right',
          queue: true
        });
        notify(notif);
      });
    }
  });
}

export function disconnect() {
  if (stompClient != null) {
    stompClient.disconnect(() => {
      console.log("Disconnected");
    });
  }
}

export function notify(notif: Message) {
  const options = {
    title: `${notif?.eventName}`,
    body: `Hi User, ${notif.eventId}`,
    image: `https://res.cloudinary.com/ekosutrisno/image/upload/v1662785818/briix/notif_n0ogoj.jpg`,
    icon: 'https://res.cloudinary.com/ekosutrisno/image/upload/v1662786263/briix/n_pyzbuz.png',
  };

  if ('Notification' in window) {
    // Show Native Browser Notifications
    let n = new Notification(options.title, options);
    n.onshow = () => { };
  } else {
    console.log("Web Push Notifications does not supported.");
  }
}

export function requestPermission() {
  if ('Notification' in window) {
    Notification.requestPermission()
  } else {
    console.log("Web Push Notifications does not supported.");
  }
}

export function init() {
  if (import.meta.env.VITE_BASE_WEB_SOCKET_ENABLED == 'true') {
    connect();
    requestPermission();
  }
}

export function notifTypeMapper(type: MessageType) {
  switch (type) {
    case MessageType.UPDATED:
      return "info"
    case MessageType.DELETED:
      return "warning"
    default:
      return "success"
  }
}

export interface Message {
  eventId: string
  timestamp: string
  eventName: MessageType
}

export enum MessageType {
  CREATED = "CREATED",
  UPDATED = "UPDATED",
  DELETED = "DELETED"
}