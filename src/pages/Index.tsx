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
      title: "Поражение от команды Локо",
      date: "16.10.2025",
      category: "Матч",
      content: "Сегодня команда СКА 1946 уступила команде Локо со счетом 2:3. Несмотря на упорную борьбу, нашей команде не удалось переломить ход матча",
      image: "🏒"
    },
    {
      id: 2,
      title: "Товарищеский матч с Динамо-Шинник",
      date: "13.10.2025",
      category: "Товарищеский матч",
      content: "В товарищеском матче команда СКА 1946 уступила Динамо-Шинник со счетом 1:4. Несмотря на результат, игра дала ценный опыт для дальнейшего развития команды",
      image: "🥅"
    }
  ];

  const transfers = [
    {
      id: 1,
      player: "rundya",
      type: "in",
      from: "Молодежка СКА",
      date: "1 сентября 2024",
      position: "PW"
    },
    {
      id: 2,
      player: "dangel",
      type: "in",
      from: "Динамо М",
      date: "25 августа 2024",
      position: "LD"
    },
    {
      id: 3,
      player: "alexy",
      type: "out",
      to: "Торпедо",
      date: "20 августа 2024",
      position: "RW"
    }
  ];

  const schedule = [
    {
      id: 1,
      date: "25 октября 2025",
      time: "17:30",
      opponent: "Белые Медведи",
      location: "Дома",
      status: "upcoming"
    },
    {
      id: 2,
      date: "26 октября 2025",
      time: "17:30",
      opponent: "Красная Армия",
      location: "Дома",
      status: "upcoming"
    },
    {
      id: 3,
      date: "27 октября 2025",
      time: "17:30",
      opponent: "Сибирские снайперы",
      location: "Дома",
      status: "upcoming"
    },
    {
      id: 4,
      date: "29 октября 2025",
      time: "16:30",
      opponent: "Омские Ястребы",
      location: "В гостях",
      status: "upcoming"
    },
    {
      id: 5,
      date: "30 октября 2025",
      time: "16:30",
      opponent: "Толпар",
      location: "В гостях",
      status: "upcoming"
    },
    {
      id: 6,
      date: "31 октября 2025",
      time: "16:30",
      opponent: "Академия Михайлова",
      location: "В гостях",
      status: "upcoming"
    },
    {
      id: 7,
      date: "7 ноября 2025",
      time: "18:30",
      opponent: "Стальные Лисы",
      location: "Дома",
      status: "upcoming"
    },
    {
      id: 8,
      date: "15 ноября 2025",
      time: "16:30",
      opponent: "Локо",
      location: "Дома",
      status: "upcoming"
    },
    {
      id: 9,
      date: "18 ноября 2025",
      time: "18:30",
      opponent: "Шинник",
      location: "В гостях",
      status: "upcoming"
    },
    {
      id: 10,
      date: "22 ноября 2025",
      time: "17:30",
      opponent: "Кузнецкие Медведи",
      location: "Дома",
      status: "upcoming"
    },
    {
      id: 11,
      date: "23 ноября 2025",
      time: "16:30",
      opponent: "Алмаз",
      location: "В гостях",
      status: "upcoming"
    }
  ];

  const standings = [
    { position: 1, team: "Красная Армия", games: 10, wins: 8, winsOT: 0, lossesOT: 1, losses: 1, goalsFor: 23, goalsAgainst: 9, points: 17 },
    { position: 2, team: "Тюменский Легион", games: 11, wins: 6, winsOT: 1, lossesOT: 0, losses: 3, goalsFor: 24, goalsAgainst: 11, points: 16 },
    { position: 3, team: "Сибирские снайперы", games: 12, wins: 7, winsOT: 0, lossesOT: 0, losses: 4, goalsFor: 24, goalsAgainst: 13, points: 15 },
    { position: 4, team: "Динамо-Шинник", games: 8, wins: 5, winsOT: 1, lossesOT: 0, losses: 1, goalsFor: 21, goalsAgainst: 10, points: 14 },
    { position: 5, team: "Толпар", games: 10, wins: 5, winsOT: 0, lossesOT: 0, losses: 3, goalsFor: 26, goalsAgainst: 14, points: 13 },
    { position: 6, team: "Стальные Лисы", games: 7, wins: 6, winsOT: 0, lossesOT: 0, losses: 1, goalsFor: 14, goalsAgainst: 6, points: 12 },
    { position: 7, team: "МХК Спартак", games: 5, wins: 4, winsOT: 0, lossesOT: 0, losses: 1, goalsFor: 12, goalsAgainst: 3, points: 8 },
    { position: 8, team: "Мамонты Югры", games: 5, wins: 3, winsOT: 1, lossesOT: 0, losses: 1, goalsFor: 10, goalsAgainst: 6, points: 8 },
    { position: 9, team: "Академия Михайлова", games: 7, wins: 3, winsOT: 1, lossesOT: 0, losses: 3, goalsFor: 9, goalsAgainst: 8, points: 8 },
    { position: 10, team: "Локо", games: 8, wins: 3, winsOT: 0, lossesOT: 1, losses: 4, goalsFor: 19, goalsAgainst: 24, points: 7 },
    { position: 11, team: "Омские Ястребы", games: 10, wins: 3, winsOT: 0, lossesOT: 0, losses: 7, goalsFor: 13, goalsAgainst: 18, points: 6 },
    { position: 12, team: "МХК Динамо СПб", games: 8, wins: 1, winsOT: 0, lossesOT: 1, losses: 4, goalsFor: 10, goalsAgainst: 17, points: 6 },
    { position: 13, team: "СКА 19-46", games: 7, wins: 3, winsOT: 0, lossesOT: 0, losses: 4, goalsFor: 6, goalsAgainst: 12, points: 6, isCurrentTeam: true },
    { position: 14, team: "Кузнецкие Медведи", games: 9, wins: 2, winsOT: 0, lossesOT: 0, losses: 7, goalsFor: 7, goalsAgainst: 20, points: 4 },
    { position: 15, team: "Чайка", games: 4, wins: 1, winsOT: 0, lossesOT: 1, losses: 2, goalsFor: 5, goalsAgainst: 9, points: 3 },
    { position: 16, team: "Белые Медведи", games: 8, wins: 1, winsOT: 0, lossesOT: 0, losses: 6, goalsFor: 4, goalsAgainst: 20, points: 3 },
    { position: 17, team: "Крылья Советов", games: 2, wins: 1, winsOT: 0, lossesOT: 0, losses: 1, goalsFor: 2, goalsAgainst: 2, points: 2 },
    { position: 18, team: "Алмаз", games: 9, wins: 0, winsOT: 0, lossesOT: 0, losses: 9, goalsFor: 0, goalsAgainst: 0, points: 0 }
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
                <img src="https://static.flashscore.com/res/image/data/nZidJKXg-jwu9Rcr4-fqMaIwHk.png" alt="" className="w-10 h-10 object-contain" />
                <div>
                  <h1 className="text-3xl font-bold font-montserrat bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    SKA 1946
                  </h1>
                  <p className="text-sm text-muted-foreground">VFHL|PUCK League</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="border-primary text-primary">
                  <Icon name="Trophy" size={14} className="mr-1" />13 место
                </Badge>
                <Badge variant="outline" className="border-accent text-accent">
                  6 очков
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
                              <span className="text-sm">из Сиб.Снайперов</span>
                            ) : (
                              <span className="text-sm">уход</span>
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
                {schedule.map((match, index) => (
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
                              <Badge variant={match.location === "Дома" ? "default" : "secondary"}>
                                <Icon name={match.location === "Дома" ? "Home" : "Plane"} size={14} className="mr-1" />
                                {match.location}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                ))}
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
                          <th className="px-6 py-4 text-left text-sm font-bold text-foreground/80 uppercase tracking-wider">#</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-foreground/80 uppercase tracking-wider">Команда</th>
                          <th className="px-6 py-4 text-center text-sm font-bold text-foreground/80 uppercase tracking-wider">И</th>
                          <th className="px-6 py-4 text-center text-sm font-bold text-foreground/80 uppercase tracking-wider">В</th>
                          <th className="px-6 py-4 text-center text-sm font-bold text-foreground/80 uppercase tracking-wider">ВО</th>
                          <th className="px-6 py-4 text-center text-sm font-bold text-foreground/80 uppercase tracking-wider">ПО</th>
                          <th className="px-6 py-4 text-center text-sm font-bold text-foreground/80 uppercase tracking-wider">П</th>
                          <th className="px-6 py-4 text-center text-sm font-bold text-foreground/80 uppercase tracking-wider">ШЗ</th>
                          <th className="px-6 py-4 text-center text-sm font-bold text-foreground/80 uppercase tracking-wider">ШП</th>
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
                            <td className="px-6 py-4 text-center text-muted-foreground">{team.winsOT}</td>
                            <td className="px-6 py-4 text-center text-muted-foreground">{team.lossesOT}</td>
                            <td className="px-6 py-4 text-center text-muted-foreground">{team.losses}</td>
                            <td className="px-6 py-4 text-center text-muted-foreground">{team.goalsFor}</td>
                            <td className="px-6 py-4 text-center text-muted-foreground">{team.goalsAgainst}</td>
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