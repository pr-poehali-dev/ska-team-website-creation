import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

type Section = "news" | "transfers" | "roster" | "schedule" | "standings";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("news");

  const players = [
    { number: 43, name: "BAGA", position: "GK", fullPosition: "Вратарь", games: 18, saves: 312, goalsAgainst: 41 },
    { number: 16, name: "KEWS1K", position: "PD", fullPosition: "Правый защитник", games: 18, goals: 3, assists: 8 },
    { number: 12, name: "extazy", position: "LD", fullPosition: "Левый защитник", games: 18, goals: 2, assists: 12 },
    { number: 7, name: "F", position: "CW", fullPosition: "Центральный нападающий", games: 18, goals: 15, assists: 9 },
    { number: 17, name: "max", position: "PW", fullPosition: "Правый нападающий", games: 18, goals: 11, assists: 7 }
  ];

  const news = [
    {
      id: 1,
      title: "Победа над Локомотивом 4:2",
      date: "15 октября 2024",
      category: "Матч",
      content: "SKA 1946 одержала уверенную победу над Локомотивом со счетом 4:2. Дубль оформил нападающий F, по голу забили max и KEWS1K.",
      image: "🏒"
    },
    {
      id: 2,
      title: "BAGA - лучший вратарь недели",
      date: "12 октября 2024",
      category: "Награды",
      content: "Вратарь команды BAGA признан лучшим голкипером недели в VFHL|PUCK. За три матча он отразил 89% бросков.",
      image: "🥅"
    },
    {
      id: 3,
      title: "Подготовка к матчу с ЦСКА",
      date: "10 октября 2024",
      category: "Тренировки",
      content: "Команда активно готовится к важному матчу против ЦСКА. Тренерский штаб отрабатывает новые тактические схемы.",
      image: "⚡"
    },
    {
      id: 4,
      title: "Статистика сезона: первая треть",
      date: "8 октября 2024",
      category: "Аналитика",
      content: "Подведены итоги первой трети сезона. SKA 1946 набрала 21 очко и занимает 9 место в турнирной таблице.",
      image: "📊"
    }
  ];

  const transfers = [
    {
      id: 1,
      player: "max",
      type: "in",
      from: "Молодежка СКА",
      date: "1 сентября 2024",
      position: "PW"
    },
    {
      id: 2,
      player: "extazy",
      type: "in",
      from: "Динамо М",
      date: "25 августа 2024",
      position: "LD"
    },
    {
      id: 3,
      player: "Петров А.",
      type: "out",
      to: "Торпедо",
      date: "20 августа 2024",
      position: "RW"
    }
  ];

  const schedule = [
    {
      id: 1,
      date: "20 октября 2024",
      time: "19:00",
      opponent: "ЦСКА",
      location: "Дом",
      status: "upcoming"
    },
    {
      id: 2,
      date: "23 октября 2024",
      time: "18:30",
      opponent: "Ак Барс",
      location: "Выезд",
      status: "upcoming"
    },
    {
      id: 3,
      date: "15 октября 2024",
      time: "19:00",
      opponent: "Локомотив",
      location: "Дом",
      status: "finished",
      score: "4:2",
      result: "win"
    },
    {
      id: 4,
      date: "12 октября 2024",
      time: "18:00",
      opponent: "Торпедо",
      location: "Выезд",
      status: "finished",
      score: "2:3",
      result: "loss"
    },
    {
      id: 5,
      date: "8 октября 2024",
      time: "19:30",
      opponent: "Авангард",
      location: "Дом",
      status: "finished",
      score: "3:1",
      result: "win"
    }
  ];

  const standings = [
    { position: 1, team: "Северсталь", games: 18, wins: 14, losses: 4, points: 42 },
    { position: 2, team: "Металлург Мг", games: 18, wins: 13, losses: 5, points: 39 },
    { position: 3, team: "Динамо М", games: 18, wins: 12, losses: 6, points: 36 },
    { position: 4, team: "ЦСКА", games: 18, wins: 11, losses: 7, points: 33 },
    { position: 5, team: "Ак Барс", games: 18, wins: 10, losses: 8, points: 30 },
    { position: 6, team: "Авангард", games: 18, wins: 10, losses: 8, points: 30 },
    { position: 7, team: "Торпедо", games: 18, wins: 9, losses: 9, points: 27 },
    { position: 8, team: "Локомотив", games: 18, wins: 8, losses: 10, points: 24 },
    { position: 9, team: "SKA 1946", games: 18, wins: 7, losses: 11, points: 21, isCurrentTeam: true },
    { position: 10, team: "Салават Юлаев", games: 18, wins: 6, losses: 12, points: 18 },
    { position: 11, team: "Спартак", games: 18, wins: 5, losses: 13, points: 15 },
    { position: 12, team: "Амур", games: 18, wins: 4, losses: 14, points: 12 }
  ];

  const menuItems = [
    { id: "news" as Section, label: "Новости", icon: "Newspaper" },
    { id: "transfers" as Section, label: "Трансферы", icon: "ArrowLeftRight" },
    { id: "roster" as Section, label: "Состав", icon: "Users" },
    { id: "schedule" as Section, label: "Расписание", icon: "Calendar" },
    { id: "standings" as Section, label: "Таблица", icon: "Award" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.15),transparent_50%)]" />
      
      <div className="relative">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <Icon name="Shield" size={40} className="text-primary" />
                <div>
                  <h1 className="text-3xl font-bold font-montserrat bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    SKA 1946
                  </h1>
                  <p className="text-sm text-muted-foreground">VFHL|PUCK League</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="border-primary text-primary">
                  <Icon name="Trophy" size={14} className="mr-1" />9 место
                </Badge>
                <Badge variant="outline" className="border-accent text-accent">
                  21 очко
                </Badge>
              </div>
            </div>
          </div>
        </header>

        <nav className="sticky top-[89px] z-40 bg-card/50 backdrop-blur-lg border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto py-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-12">
          {activeSection === "news" && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 font-montserrat flex items-center gap-3">
                <Icon name="Newspaper" size={36} className="text-primary" />
                Новости команды
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {news.map((item, index) => (
                  <Card 
                    key={item.id}
                    className="bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden group animate-scale-in"
                    style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'both' }}
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-5xl">{item.image}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                            <span className="text-sm text-muted-foreground">{item.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === "transfers" && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 font-montserrat flex items-center gap-3">
                <Icon name="ArrowLeftRight" size={36} className="text-primary" />
                Трансферы
              </h2>
              <div className="max-w-4xl mx-auto space-y-4">
                {transfers.map((transfer, index) => (
                  <Card 
                    key={transfer.id}
                    className="bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'both' }}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          transfer.type === "in" ? "bg-green-500/20" : "bg-red-500/20"
                        }`}>
                          <Icon 
                            name={transfer.type === "in" ? "ArrowDownToLine" : "ArrowUpFromLine"} 
                            size={28}
                            className={transfer.type === "in" ? "text-green-500" : "text-red-500"}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold">{transfer.player}</h3>
                            <Badge>{transfer.position}</Badge>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="Calendar" size={16} />
                            <span className="text-sm">{transfer.date}</span>
                            <span className="mx-2">•</span>
                            {transfer.type === "in" ? (
                              <span className="text-sm">из {transfer.from}</span>
                            ) : (
                              <span className="text-sm">в {transfer.to}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === "roster" && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 font-montserrat flex items-center gap-3">
                <Icon name="Users" size={36} className="text-primary" />
                Состав команды
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {players.map((player, index) => (
                  <Card 
                    key={player.number}
                    className="bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden group animate-scale-in"
                    style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'both' }}
                  >
                    <div className="p-6 relative">
                      <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors font-montserrat">
                        {player.number}
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-white font-montserrat shadow-lg">
                            {player.number}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground font-montserrat">{player.name}</h3>
                            <p className="text-sm text-accent font-semibold">{player.position}</p>
                          </div>
                        </div>
                        <div className="space-y-2 pt-4 border-t border-border/50">
                          <p className="text-sm text-muted-foreground mb-3">{player.fullPosition}</p>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="bg-muted/50 rounded-lg p-2">
                              <div className="text-xs text-muted-foreground mb-1">Игры</div>
                              <div className="text-lg font-bold">{player.games}</div>
                            </div>
                            {player.position === "GK" ? (
                              <>
                                <div className="bg-muted/50 rounded-lg p-2">
                                  <div className="text-xs text-muted-foreground mb-1">Сэйвы</div>
                                  <div className="text-lg font-bold">{player.saves}</div>
                                </div>
                                <div className="bg-muted/50 rounded-lg p-2">
                                  <div className="text-xs text-muted-foreground mb-1">Проп.</div>
                                  <div className="text-lg font-bold">{player.goalsAgainst}</div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="bg-muted/50 rounded-lg p-2">
                                  <div className="text-xs text-muted-foreground mb-1">Голы</div>
                                  <div className="text-lg font-bold">{player.goals}</div>
                                </div>
                                <div className="bg-muted/50 rounded-lg p-2">
                                  <div className="text-xs text-muted-foreground mb-1">Пасы</div>
                                  <div className="text-lg font-bold">{player.assists}</div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === "schedule" && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 font-montserrat flex items-center gap-3">
                <Icon name="Calendar" size={36} className="text-primary" />
                Расписание матчей
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Предстоящие матчи</h3>
                  {schedule.filter(m => m.status === "upcoming").map((match, index) => (
                    <Card 
                      key={match.id}
                      className="bg-card/50 backdrop-blur-sm border-2 border-primary/50 hover:border-primary transition-all duration-300 mb-4 animate-scale-in"
                      style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'both' }}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-sm text-muted-foreground mb-1">Дата</div>
                              <div className="font-bold">{match.date}</div>
                              <div className="text-xl font-bold text-primary mt-1">{match.time}</div>
                            </div>
                            <div className="w-px h-16 bg-border" />
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl font-bold">SKA 1946</span>
                                <Icon name="Swords" size={20} className="text-muted-foreground" />
                                <span className="text-2xl font-bold">{match.opponent}</span>
                              </div>
                              <Badge variant={match.location === "Дом" ? "default" : "secondary"}>
                                <Icon name={match.location === "Дом" ? "Home" : "Plane"} size={14} className="mr-1" />
                                {match.location}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-muted-foreground">Прошедшие матчи</h3>
                  {schedule.filter(m => m.status === "finished").map((match, index) => (
                    <Card 
                      key={match.id}
                      className="bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 mb-4 animate-scale-in"
                      style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'both' }}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-sm text-muted-foreground mb-1">Дата</div>
                              <div className="font-bold text-sm">{match.date}</div>
                            </div>
                            <div className="w-px h-12 bg-border" />
                            <div>
                              <div className="flex items-center gap-3">
                                <span className="text-xl font-bold">SKA 1946</span>
                                <span className={`text-2xl font-bold px-3 py-1 rounded ${
                                  match.result === "win" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
                                }`}>
                                  {match.score}
                                </span>
                                <span className="text-xl font-bold">{match.opponent}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant={match.location === "Дом" ? "default" : "secondary"}>
                            {match.location}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === "standings" && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 font-montserrat flex items-center gap-3">
                <Icon name="Award" size={36} className="text-primary" />
                Турнирная таблица VFHL|PUCK
              </h2>
              <div className="max-w-5xl mx-auto">
                <Card className="bg-card/50 backdrop-blur-sm border-2 border-border overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr className="border-b-2 border-border">
                          <th className="px-6 py-4 text-left text-sm font-bold text-foreground/80 uppercase tracking-wider">Место</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-foreground/80 uppercase tracking-wider">Команда</th>
                          <th className="px-6 py-4 text-center text-sm font-bold text-foreground/80 uppercase tracking-wider">И</th>
                          <th className="px-6 py-4 text-center text-sm font-bold text-foreground/80 uppercase tracking-wider">В</th>
                          <th className="px-6 py-4 text-center text-sm font-bold text-foreground/80 uppercase tracking-wider">П</th>
                          <th className="px-6 py-4 text-center text-sm font-bold text-foreground/80 uppercase tracking-wider">О</th>
                        </tr>
                      </thead>
                      <tbody>
                        {standings.map((team) => (
                          <tr 
                            key={team.position}
                            className={`border-b border-border/50 transition-all duration-200 ${
                              team.isCurrentTeam 
                                ? 'bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30' 
                                : 'hover:bg-muted/30'
                            }`}
                          >
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                                team.isCurrentTeam ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'
                              }`}>
                                {team.position}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`font-semibold ${team.isCurrentTeam ? 'text-primary text-lg' : 'text-foreground'}`}>
                                {team.team}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center text-muted-foreground">{team.games}</td>
                            <td className="px-6 py-4 text-center text-muted-foreground">{team.wins}</td>
                            <td className="px-6 py-4 text-center text-muted-foreground">{team.losses}</td>
                            <td className="px-6 py-4 text-center">
                              <span className={`font-bold ${team.isCurrentTeam ? 'text-primary text-lg' : 'text-foreground'}`}>
                                {team.points}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </main>

        <footer className="container mx-auto px-4 py-12 text-center border-t border-border/50 mt-12">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Icon name="Shield" size={20} className="text-primary" />
            <p className="text-sm">SKA 1946 • VFHL|PUCK League • Season 2024/25</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;