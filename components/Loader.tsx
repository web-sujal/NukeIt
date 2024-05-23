import { ClimbingBoxLoader } from "react-spinners";
import Box from "./Box";
import useTheme from "@/hooks/useTheme";

const Loader = () => {
  const { isDarkMode } = useTheme();

  return (
    <Box className="flex h-full items-center justify-center">
      <ClimbingBoxLoader color={isDarkMode ? "#8564F7" : "#FE7D7D"} size={40} />
    </Box>
  );
};

export default Loader;
