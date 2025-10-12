export const mockUsers = [
  "ShadowNova#8421",
  "ByteWitch#1023",
  "NeonFang#7745",
  "GhostPacket#3901",
  "SleepyRaccoon#2209",
  "ZeroLag#6590",
  "LofiSamurai#8114",
  "CoffeeOverlord#5542",
  "HexMage#9008",
  "404Kitten#4213",
  "DankBot#7777",
  "SkylineDrift#2381",
  "AFKWizard#6669",
  "EchoBlade#1500",
  "MidnightNoodle#4328",
  "DebugDemon#9824",
  "CosmicBurrito#1230",
  "VPNElf#6792",
  "PacketLord#5151",
  "MochiMonster#3312",
];

function OnlineList() {
  return (
    <div className="border-1 rounded-xl h-[400px]  p-4 overflow-y-auto">
      <h2 className="font-bold mb-4">Online Members</h2>
      <ul>
        {mockUsers.map((user) => {
          return (
            <li key={user} className="mb-1">
              {user}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OnlineList;
