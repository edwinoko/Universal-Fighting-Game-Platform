import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Input } from "@/components/ui/input"


export default function Frame_data_and_more() {
    return (
        <div>
            <div className="p-2">
                <Card>
                  <CardContent className="flex gap-20 p-2">
                    <Input type="text" placeholder="Mario" />
                    <Input type="text" placeholder="Search" />
                  </CardContent>
                </Card>
            </div>
            <div className="flex text-center gap-5">
                <Card>
                    <CardHeader>
                        <CardTitle>Mario</CardTitle>
                        <CardDescription>The original jumpman</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Some text about the original jumpman</p>
                    </CardContent>
                </Card>
                <Card className="w-full">
                    <CardContent>
                        <p>quick character summary, release date and some other interesting stuff</p>
                    </CardContent>
                </Card>
            </div>
            <div className="p-2">
                <Card>
                    <CardHeader>
                        <CardTitle>FrameData</CardTitle>
                    </CardHeader>
                    <CardContent className="flex gap-20 p-2">
                        Place image of frame data
                    </CardContent>
                </Card>
            </div>
        </div>
    )
  }
  