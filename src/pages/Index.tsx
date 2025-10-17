import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

type Section = "news" | "transfers" | "roster" | "schedule" | "standings";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("news");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const players = [
    { number: 43, name: "BAGA", position: "GK", fullPosition: "Вратарь", games: 2, saves: 312, goalsAgainst: 41, wins: 0, savePercentage: "50%" },
    { number: 16, name: "KEWS1K", position: "PD", fullPosition: "Правый защитник", games: 3, goals: 0, assists: 0 },
    { number: 12, name: "extazy", position: "LD", fullPosition: "Левый защитник", games: 5, goals: 0, assists: 2 },
    { number: 7, name: "F", position: "CW", fullPosition: "Центральный нападающий", games: 5, goals: 4, assists: 3 },
    { number: 17, name: "max", position: "PW", fullPosition: "Правый нападающий", games: 5, goals: 1, assists: 0 }
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
      date: "12.10.25",
      position: "PW"
    },
    {
      id: 2,
      player: "dangel",
      type: "in",
      from: "Динамо М",
      date: "12.10.25",
      position: "LD"
    },
    {
      id: 3,
      player: "alexy",
      type: "out",
      to: "Торпедо",
      date: "10.10.25",
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
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkTheme 
        ? "bg-gradient-to-b from-background to-muted" 
        : "bg-gradient-to-br from-blue-50 via-white to-red-50"
    }`}>
      {isDarkTheme ? (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.15),transparent_50%)]" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.12),transparent_50%)]" />
        </>
      )}
      
      <div className="relative">
        <header className={`sticky top-0 z-50 backdrop-blur-lg border-b transition-colors ${
          isDarkTheme ? "bg-background/80 border-border/50" : "bg-white/80 border-gray-200"
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <img src="https://static.flashscore.com/res/image/data/nZidJKXg-jwu9Rcr4-fqMaIwHk.png" alt="" className="w-24 h-24 object-contain" />
                <div>
                  <h1 className="text-3xl font-bold font-montserrat bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    SKA 1946
                  </h1>
                  <p className={`text-sm ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>VFHL|PUCK League</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsDarkTheme(!isDarkTheme)}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkTheme 
                      ? "bg-muted hover:bg-muted/80" 
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label="Переключить тему"
                >
                  <Icon name={isDarkTheme ? "Sun" : "Moon"} size={20} className={isDarkTheme ? "text-foreground" : "text-gray-800"} />
                </button>
                <Badge variant="outline" className="border-primary text-primary">
                  <Icon name="Trophy" size={14} className="mr-1" />13 место
                </Badge>
                <Badge variant="outline" className="border-primary text-primary">
                  6 очков
                </Badge>
              </div>
            </div>
          </div>
        </header>

        <nav className={`sticky top-[89px] z-40 backdrop-blur-lg border-b transition-colors ${
          isDarkTheme ? "bg-card/50 border-border/50" : "bg-white/50 border-gray-200"
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto py-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : isDarkTheme 
                        ? "hover:bg-muted text-muted-foreground hover:text-foreground"
                        : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
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
              <h2 className={`text-4xl font-bold mb-8 font-montserrat flex items-center gap-3 ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>
                <Icon name="Newspaper" size={36} className="text-primary" />
                Новости команды
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {news.map((item, index) => (
                  <Card 
                    key={item.id}
                    className={`backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden group animate-scale-in ${isDarkTheme ? "bg-card text-card-foreground" : "bg-white text-gray-900"}`}
                    style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'both' }}
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-5xl">{item.image}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                            <span className={`text-sm ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>{item.date}</span>
                          </div>
                          <h3 className={`text-xl font-bold mb-2 group-hover:text-primary transition-colors ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className={`leading-relaxed ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>{item.content}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === "transfers" && (
            <div className="animate-fade-in">
              <h2 className={`text-4xl font-bold mb-8 font-montserrat flex items-center gap-3 ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>
                <Icon name="ArrowLeftRight" size={36} className="text-primary" />
                Трансферы
              </h2>
              <div className="max-w-4xl mx-auto space-y-4">
                {transfers.map((transfer, index) => (
                  <Card 
                    key={transfer.id}
                    className={`backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 animate-scale-in ${isDarkTheme ? "bg-card text-card-foreground" : "bg-white text-gray-900"}`}
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
                            <h3 className={`text-2xl font-bold ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>{transfer.player}</h3>
                            <Badge>{transfer.position}</Badge>
                          </div>
                          <div className={`flex items-center gap-2 ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>
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
              <h2 className={`text-4xl font-bold mb-8 font-montserrat flex items-center gap-3 ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>
                <Icon name="Users" size={36} className="text-primary" />
                Состав команды
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {players.map((player, index) => (
                  <Card 
                    key={player.number}
                    className={`backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden group animate-scale-in ${isDarkTheme ? "bg-card text-card-foreground" : "bg-white text-gray-900"}`}
                    style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'both' }}
                  >
                    <div className="p-6 relative">
                      <div className={`absolute top-0 right-0 text-8xl font-bold transition-colors font-montserrat ${
                        isDarkTheme ? "text-primary/5 group-hover:text-primary/10" : "text-gray-200 group-hover:text-gray-300"
                      }`}>
                        {player.number}
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-white font-montserrat shadow-lg">
                            {player.number}
                          </div>
                          <div>
                            <h3 className={`text-2xl font-bold font-montserrat ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>{player.name}</h3>
                            <p className={`text-sm font-semibold ${isDarkTheme ? "text-gray-400" : "text-gray-500"}`}>{player.position}</p>
                          </div>
                        </div>
                        <div className="space-y-2 pt-4 border-t border-border/50">
                          <p className={`text-sm mb-3 ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>{player.fullPosition}</p>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="bg-muted/50 rounded-lg p-2">
                              <div className={`text-xs mb-1 ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>Игры</div>
                              <div className={`text-lg font-bold ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>{player.games}</div>
                            </div>
                            {player.position === "GK" ? (
                              <>
                                <div className="bg-muted/50 rounded-lg p-2">
                                  <div className={`text-xs mb-1 ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>Победы</div>
                                  <div className={`text-lg font-bold ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>{player.wins}</div>
                                </div>
                                <div className="bg-muted/50 rounded-lg p-2">
                                  <div className={`text-xs mb-1 ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>% Отражений</div>
                                  <div className={`text-lg font-bold ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>{player.savePercentage}</div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="bg-muted/50 rounded-lg p-2">
                                  <div className={`text-xs mb-1 ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>Голы</div>
                                  <div className={`text-lg font-bold ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>{player.goals}</div>
                                </div>
                                <div className="bg-muted/50 rounded-lg p-2">
                                  <div className={`text-xs mb-1 ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>Передачи</div>
                                  <div className={`text-lg font-bold ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>{player.assists}</div>
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
              <h2 className={`text-4xl font-bold mb-8 font-montserrat flex items-center gap-3 ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>
                <Icon name="Calendar" size={36} className="text-primary" />
                Расписание матчей
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                {schedule.map((match, index) => (
                    <Card 
                      key={match.id}
                      className={`backdrop-blur-sm border-2 border-primary/50 hover:border-primary transition-all duration-300 mb-4 animate-scale-in ${isDarkTheme ? "bg-card text-card-foreground" : "bg-white text-gray-900"}`}
                      style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'both' }}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className={`text-sm mb-1 ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>Дата</div>
                              <div className={`font-bold ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>{match.date}</div>
                              <div className="text-xl font-bold text-primary mt-1">{match.time}</div>
                            </div>
                            <div className="w-px h-16 bg-border" />
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <span className={`text-2xl font-bold ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>SKA 1946</span>
                                <Icon name="Swords" size={20} className={isDarkTheme ? "text-muted-foreground" : "text-gray-600"} />
                                <span className={`text-2xl font-bold ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>{match.opponent}</span>
                              </div>
                              <Badge variant={match.location === "Дома" ? "default" : "secondary"}>
                                <Icon name={match.location === "Дома" ? "Home" : "Plane"} size={14} className="mr-1" />
                                {match.location}
                              </Badge>
                            </div>
                          </div>
                          <a 
                            href="https://t.me/+spYGPssgQFQ1ODY6" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                          >
                            <Icon name="Ticket" size={20} />
                            Купить билет
                          </a>
                        </div>
                      </div>
                    </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === "standings" && (
            <div className="animate-fade-in">
              <h2 className={`text-4xl font-bold mb-8 font-montserrat flex items-center gap-3 ${isDarkTheme ? "text-foreground" : "text-gray-900"}`}>
                <Icon name="Award" size={36} className="text-primary" />
                Турнирная таблица VFHL|PUCK
              </h2>
              <div className="max-w-5xl mx-auto">
                <Card className={`backdrop-blur-sm border-2 border-border overflow-hidden ${isDarkTheme ? "bg-card text-card-foreground" : "bg-white text-gray-900"}`}>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr className="border-b-2 border-border">
                          <th className={`px-6 py-4 text-left text-sm font-bold uppercase tracking-wider ${isDarkTheme ? "text-foreground/80" : "text-gray-700"}`}>#</th>
                          <th className={`px-6 py-4 text-left text-sm font-bold uppercase tracking-wider ${isDarkTheme ? "text-foreground/80" : "text-gray-700"}`}>Команда</th>
                          <th className={`px-6 py-4 text-center text-sm font-bold uppercase tracking-wider ${isDarkTheme ? "text-foreground/80" : "text-gray-700"}`}>И</th>
                          <th className={`px-6 py-4 text-center text-sm font-bold uppercase tracking-wider ${isDarkTheme ? "text-foreground/80" : "text-gray-700"}`}>В</th>
                          <th className={`px-6 py-4 text-center text-sm font-bold uppercase tracking-wider ${isDarkTheme ? "text-foreground/80" : "text-gray-700"}`}>ВО</th>
                          <th className={`px-6 py-4 text-center text-sm font-bold uppercase tracking-wider ${isDarkTheme ? "text-foreground/80" : "text-gray-700"}`}>ПО</th>
                          <th className={`px-6 py-4 text-center text-sm font-bold uppercase tracking-wider ${isDarkTheme ? "text-foreground/80" : "text-gray-700"}`}>П</th>
                          <th className={`px-6 py-4 text-center text-sm font-bold uppercase tracking-wider ${isDarkTheme ? "text-foreground/80" : "text-gray-700"}`}>ШЗ</th>
                          <th className={`px-6 py-4 text-center text-sm font-bold uppercase tracking-wider ${isDarkTheme ? "text-foreground/80" : "text-gray-700"}`}>ШП</th>
                          <th className={`px-6 py-4 text-center text-sm font-bold uppercase tracking-wider ${isDarkTheme ? "text-foreground/80" : "text-gray-700"}`}>О</th>
                        </tr>
                      </thead>
                      <tbody>
                        {standings.map((team) => (
                          <tr 
                            key={team.position}
                            className={`border-b transition-all duration-200 ${
                              team.position >= 15 && team.position <= 18
                                ? 'bg-red-500/15 border-red-500/30 hover:bg-red-500/25'
                                : team.isCurrentTeam 
                                  ? 'bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 border-border/50' 
                                  : 'hover:bg-muted/30 border-border/50'
                            }`}
                          >
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                                team.isCurrentTeam ? 'bg-primary text-primary-foreground' : isDarkTheme ? 'bg-muted text-foreground' : 'bg-gray-200 text-gray-900'
                              }`}>
                                {team.position}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`font-semibold ${team.isCurrentTeam ? 'text-primary text-lg' : isDarkTheme ? 'text-foreground' : 'text-gray-900'}`}>
                                {team.team}
                              </span>
                            </td>
                            <td className={`px-6 py-4 text-center ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>{team.games}</td>
                            <td className={`px-6 py-4 text-center ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>{team.wins}</td>
                            <td className={`px-6 py-4 text-center ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>{team.winsOT}</td>
                            <td className={`px-6 py-4 text-center ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>{team.lossesOT}</td>
                            <td className={`px-6 py-4 text-center ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>{team.losses}</td>
                            <td className={`px-6 py-4 text-center ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>{team.goalsFor}</td>
                            <td className={`px-6 py-4 text-center ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>{team.goalsAgainst}</td>
                            <td className="px-6 py-4 text-center">
                              <span className={`font-bold ${team.isCurrentTeam ? 'text-primary text-lg' : isDarkTheme ? 'text-foreground' : 'text-gray-900'}`}>
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
          <div className={`flex items-center justify-center gap-2 ${isDarkTheme ? "text-muted-foreground" : "text-gray-600"}`}>
            <Icon name="Shield" size={20} className="text-primary" />
            <p className="text-sm">SKA 1946 • VFHL|PUCK League • Season 2024/25</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;