import React from "react";

export default function SocialMediaLink({icon, title, description, url}) {
  return <a key={url} href={url}>
    <img className="h-12 w-12" src={icon} alt="Instagram Logo"/>
  </a>
}
