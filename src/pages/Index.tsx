import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const players = [
    { number: 43, name: "BAGA", position: "GK", fullPosition: "Вратарь" },
    { number: 16, name: "KEWS1K", position: "PD", fullPosition: "Правый защитник" },
    { number: 12, name: "extazy", position: "LD", fullPosition: "Левый защитник" },
    { number: 7, name: "F", position: "CW", fullPosition: "Центральный нападающий" },
    { number: 17, name: "max", position: "PW", fullPosition: "Правый нападающий" }
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.1),transparent_50%)]" />
      
      <div className="relative">
        <section className="container mx-auto px-4 pt-20 pb-16 animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <Icon name="Shield" size={56} className="text-primary" />
              <h1 className="text-7xl font-bold font-montserrat bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SKA 1946
              </h1>
            </div>
            <p className="text-2xl text-muted-foreground font-medium mb-4">VFHL|PUCK League</p>
            <div className="flex items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Icon name="Trophy" size={24} className="text-accent" />
                <span className="text-foreground/80">Позиция:</span>
                <span className="text-3xl font-bold text-primary">9</span>
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Icon name="Target" size={24} className="text-accent" />
                <span className="text-foreground/80">Очки:</span>
                <span className="text-3xl font-bold text-primary">21</span>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <h2 className="text-4xl font-bold text-center mb-12 font-montserrat flex items-center justify-center gap-3">
            <Icon name="Users" size={36} className="text-primary" />
            Состав команды
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {players.map((player, index) => (
              <Card 
                key={player.number}
                className="bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 overflow-hidden group animate-scale-in"
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
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-sm text-muted-foreground">{player.fullPosition}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <h2 className="text-4xl font-bold text-center mb-12 font-montserrat flex items-center justify-center gap-3">
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
        </section>

        <footer className="container mx-auto px-4 py-12 text-center border-t border-border/50">
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
