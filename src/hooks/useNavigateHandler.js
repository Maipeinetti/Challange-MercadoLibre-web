import { useNavigate } from "react-router";

export default function useNavigateHandler() {
  const navigate = useNavigate();
  const navigateHandler = (url) => {
    navigate(url);
  };
  return {
    navigateHandler,
  };
}
