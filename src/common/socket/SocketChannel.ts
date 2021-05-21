import { useSocket } from "./SocketContext";

export const useChannel = (channelTopic: string) => {
  const socket = useSocket();

  const channel = socket.channel(channelTopic);

  channel
    .join()
    .receive("ok", ({ messages }) =>
      console.log("successfully joined channel", messages || "")
    )
    .receive("error", ({ reason }) =>
      console.error("failed to join channel", reason)
    );
};
