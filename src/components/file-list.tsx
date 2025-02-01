import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table"
import { FileIcon, Folder, Image, Video, Music } from "lucide-react"
import Link from "next/link"
import type { File } from "~/lib/mock-data"

interface FileListProps {
  files: File[]
  onFolderClick: (folderId: string) => void
}

export function FileList({ files, onFolderClick }: FileListProps) {
  const getFileIcon = (type: string) => {
    switch (type) {
      case "folder":
        return <Folder className="h-5 w-5 text-gdrive-blue" />
      case "image":
        return <Image className="h-5 w-5 text-green-600 dark:text-green-400" />
      case "video":
        return <Video className="h-5 w-5 text-red-600 dark:text-red-400" />
      case "audio":
        return <Music className="h-5 w-5 text-orange-600 dark:text-orange-400" />
      default:
        return <FileIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="w-[50%] font-medium text-gray-500 dark:text-gray-400">Name</TableHead>
          <TableHead className="font-medium text-gray-500 dark:text-gray-400">Owner</TableHead>
          <TableHead className="font-medium text-gray-500 dark:text-gray-400">Last modified</TableHead>
          <TableHead className="font-medium text-gray-500 dark:text-gray-400">File size</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {files.map((file) => (
          <TableRow
            key={file.id}
            className="hover:bg-gdrive-hover-light dark:hover:bg-gdrive-hover-dark cursor-pointer"
          >
            <TableCell className="font-medium">
              {file.type === "folder" ? (
                <button
                  className="flex items-center text-gray-700 dark:text-gray-200 hover:bg-gdrive-hover-light dark:hover:bg-gdrive-hover-dark rounded-md p-1 w-full"
                  onClick={() => onFolderClick(file.id)}
                >
                  {getFileIcon(file.type)}
                  <span className="ml-2">{file.name}</span>
                </button>
              ) : (
                <Link
                  href="#"
                  className="flex items-center text-gray-700 dark:text-gray-200 hover:bg-gdrive-hover-light dark:hover:bg-gdrive-hover-dark rounded-md p-1 w-full"
                >
                  {getFileIcon(file.type)}
                  <span className="ml-2">{file.name}</span>
                </Link>
              )}
            </TableCell>
            <TableCell className="text-gray-500 dark:text-gray-400">Me</TableCell>
            <TableCell className="text-gray-500 dark:text-gray-400">{file.modified}</TableCell>
            <TableCell className="text-gray-500 dark:text-gray-400">{file.size || "-"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

