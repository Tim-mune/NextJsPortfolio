import { NavLinks } from "@/utils/Links";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
const Modal = () => {
  return (
    <div className="flex items-center justify-center bg-emerald-800 w-1/2">
      <section className="">
        {NavLinks.map((item, index) => {
          return (
            <Box>
              <Link href={item.to}>{item.name}</Link>
            </Box>
          );
        })}
      </section>
    </div>
  );
};

export default Modal;
