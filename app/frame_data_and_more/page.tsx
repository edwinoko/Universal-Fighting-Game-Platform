import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Input } from "@/components/ui/input"

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


export default function Frame_data_and_more() {
    return (
        <div>
            <div className="p-2">
                <Card>
                  <CardContent className="flex gap-20 p-2">
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Game"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ssbu">Super Smash Bros Ultimate</SelectItem>
                            <SelectItem value="ssbm">Super Smash Bros Melee</SelectItem>
                            <SelectItem value="ssbbrawl">Super Smash Bros Brawl</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Character" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Mario">Mario</SelectItem>
                            <SelectItem value="Falco">Falco</SelectItem>
                            <SelectItem value="Captain_Falcon">Captain Falcon</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Move" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Forward_Smash">Forward Smash</SelectItem>
                            <SelectItem value="Uptilt">Uptilt</SelectItem>
                            <SelectItem value="Up-B">Up-B</SelectItem>
                        </SelectContent>
                    </Select>
                  </CardContent>
                </Card>
            </div>
            <div className="flex text-center gap-5 p-2">
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

                    </CardContent>
                </Card>
            </div>
            <div className="p-2">
                <Card>
                    <CardHeader>
                        <CardTitle>FrameData</CardTitle>
                    </CardHeader>
                    <CardContent className="flex p-2">
                    <div>
                       
                    </div>
                    <div>
                      
                    </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
  }
  