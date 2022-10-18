import { useContext } from "react";
import { AuthContext } from "../store/AuthProvider";

export const useAuth = () => useContext(AuthContext);