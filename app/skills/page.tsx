import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Sample skills data - you would replace this with your actual skills
const technicalSkills = [
  { name: "JavaScript", level: 60 },
  { name: "TypeScript", level: 60 },
  { name: "React", level: 70 },
  { name: "Next.js", level: 60 },
  { name: "Tailwind CSS", level: 70 },
  { name: "HTML & CSS", level: 95 },
  { name: "Git", level: 40 },
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Time Management",
  "Adaptability",
  "Attention to Detail",
  "Critical Thinking",
  "Creativity",
];

const tools = [
  "VS Code",
  "Cursor",
  "Tailwind CSS",
  "GitHub",
  "npm/yarn",
  "Terminal",
];

export default function SkillsPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Beceriler & Uzmanlık
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Teknik becerilerim, araçlarım ve uzmanlık alanlarım hakkında bir genel bakış.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Teknik Beceriler</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {technicalSkills.map((skill) => {
                const { name, level } = skill;
                return (
                  <div key={name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{name}</span>
                      <span className="text-sm text-muted-foreground">{level}%</span>
                    </div>
                    <Progress value={Math.max(0, Math.min(level, 100))} className="h-2" />
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <div className="flex flex-col gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Yumuşak Beceriler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Araçlar & Yazılımlar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool) => (
                    <div key={tool} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      
      </div>
    </div>
  )
}