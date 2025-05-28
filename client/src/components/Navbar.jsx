import ThemeToggle from "./ThemeToggle";
import { Avatar } from "@mui/material";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  return (
    <nav className="flex items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md w-full">
      {/* <div className="text-xl font-bold text-gray-800 dark:text-white">Task Manager</div> */}

      <div className="flex items-center space-x-4 ml-auto">
        <ThemeToggle />

        <div className="flex items-center space-x-2 text-gray-800 dark:text-white">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar sx={{bgcolor:'violet',color:'white',fontWeight:'bold'}}>{user.email[0]}</Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Email: {user.email}</DropdownMenuLabel>
              <DropdownMenuItem>
                <span
                  onClick={() => {
                    localStorage.removeItem('token');
                    window.location.reload()
                  }}
                >
                  Log Out
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
