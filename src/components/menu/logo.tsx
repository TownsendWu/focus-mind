import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Logo() {
  return (
    <div className="h-12.5 flex justify-content-center items-center mt-2">
      <Avatar className="rounded-lg">
        <AvatarImage
          src="https://ui.shadcn.com/favicon.ico"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </div>
  );
}
