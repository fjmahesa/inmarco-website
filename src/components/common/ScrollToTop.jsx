import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset posisi scroll ke paling atas setiap kali URL/pathname berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
