import type { Notification } from "@prisma/client";

import IconTwitch from "@/icons/IconTwitch";
import IconYouTube from "@/icons/IconYouTube";
import IconBellAlert from "@/icons/IconBellAlert";

const iconProps = { className: "h-6 w-6" };

export function NotificationIcon({
  notification,
}: {
  notification: Notification;
}) {
  let icon = <IconBellAlert {...iconProps} />;
  const link = notification.linkUrl;
  if (link) {
    if (link.match(/https:\/\/(www\.)?twitch\.tv\//)) {
      icon = <IconTwitch {...iconProps} />;
    } else if (link.match(/https:\/\/(www\.)?(youtube\.com|youtu\.be)\//)) {
      icon = <IconYouTube {...iconProps} />;
    }
  }
  return icon;
}
