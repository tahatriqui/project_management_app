import { Link } from "@inertiajs/react";
import React from "react";

function Pagination({ links }) {
  return (
    <nav className="text-center mt-4">
      {links.map((link) => (
        <Link preserveScroll
          href={link.url||''}
          key={link.label}
          className={
            "inline-block py-2 px-2 rounded-lg text-gray-200 text-xs " +
            (link.active ? "bg-gray-950" : "") +
            (!link.url
              ? "text-gray-500 cursor-not-allowed"
              : "hover:bg-gray-950")
          }
          dangerouslySetInnerHTML={{ __html: link.label }}
        ></Link>
      ))}
    </nav>
  );
}

export default Pagination;
