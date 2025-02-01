import { Button } from "~/components/ui/button"
import { Plus } from "lucide-react"

export function UploadButton() {
  return (
    <Button className="bg-gdrive-blue hover:bg-blue-700 text-white">
      <Plus className="mr-2 h-4 w-4" /> New
    </Button>
  )
}

