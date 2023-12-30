import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Articles } from "@/constants"

export default function News() {
    return (
        <div className="space-y-3 px-20 py-20 pl-20 pr-20">
            {Articles.map((article) => (
                <Card>
                    <CardHeader>
                        <CardTitle>{article.title}</CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                    </CardHeader>
                </Card>
            ))}

        </div>
    )
  }
  