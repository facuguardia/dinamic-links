import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiChakraui,
} from "react-icons/si";

function Footer() {
  return (
    <footer>
      <div className="flex justify-center items-center gap-2 text-xl text-gray-900">
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiTypescript />
        <SiReact />
        <SiNextdotjs />
        <SiNodedotjs />
        <SiTailwindcss />
        <SiChakraui />
      </div>
    </footer>
  );
}

export default Footer;
