"use client"; // Ensure client-side rendering

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";

export default function BookmarkButton() {
  const pathname = usePathname();
  const [bookmarks, setBookmarks] = useState([]);

  // Load bookmarks from localStorage on component mount
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    if (bookmarks.length >= 0) {
      // Ensure that even empty arrays are saved
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }, [bookmarks]);

  const handleClick = () => {
    const existBookmark = bookmarks.includes(pathname);

    if (!existBookmark) {
      setBookmarks((prev) => [...prev, pathname]); // Use functional update to ensure state consistency
    } else {
      const updatedBookmarks = bookmarks.filter((slug) => slug !== pathname);
      setBookmarks(updatedBookmarks); // Update bookmarks with the filtered array
    }
  };

  const isBookmarked = bookmarks.includes(pathname);

  return (
    <button onClick={handleClick}>
      {isBookmarked ? <MdBookmark size={40} /> : <MdBookmarkBorder size={40} />}
    </button>
  );
}
