import { ChevronRight } from "lucide-react"

interface BreadcrumbProps {
  path: { id: string; name: string }[]
  onNavigate: (folderId: string | null) => void
}

export function FileBreadcrumb({ path, onNavigate }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <button
            onClick={() => onNavigate(null)}
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gdrive-blue dark:text-gray-200 dark:hover:text-gdrive-blue"
          >
            My Drive
          </button>
        </li>
        {path.map((item, index) => (
          <li key={item.id}>
            <div className="flex items-center">
              <ChevronRight className="h-5 w-5 text-gray-400" />
              <button
                onClick={() => onNavigate(item.id)}
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gdrive-blue dark:text-gray-200 dark:hover:text-gdrive-blue md:ml-2"
              >
                {item.name}
              </button>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

