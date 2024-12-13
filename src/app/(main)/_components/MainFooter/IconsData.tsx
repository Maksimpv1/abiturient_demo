import Instagram from "@/app/components/ui/icons/Instagram";
import Vk from "@/app/components/ui/icons/Vk";
import Telegram from "@/app/components/ui/icons/Telegram";
import Youtube from "@/app/components/ui/icons/Youtube";
import Facebook from "@/app/components/ui/icons/Facebook";

interface IIcons {
  name: React.ReactNode;
  link?: string;
}
export const icons: IIcons[] = [
  { name: <Facebook />, link: "https://www.facebook.com/bdukm/" },
  { name: <Instagram />, link: "https://www.instagram.com/bguki/" },
  { name: <Vk />, link: "https://vk.com/bdukm" },
  { name: <Telegram />, link: "https://t.me/bguki" },
  {
    name: <Youtube />,
    link: "https://www.youtube.com/channel/UCYYU9JPJxzSKzSnYKZ6eX-g",
  },
];
