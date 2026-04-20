import { Monitor, Server, Wifi, Cable } from 'lucide-react';

const operatorStations = Array.from({ length: 8 }, (_, i) => ({
  id: `op-${i + 1}`,
  label: `Operator ${i + 1}`,
  specs: 'RTX 3070+, 32GB RAM, Win 11 Pro',
  peripherals: 'HTC Vive Focus Vision + EmotiBit',
}));

const ports = [
  { port: 'TCP 7777', desc: 'Simulation session communication', color: 'text-blue-400' },
  { port: 'UDP 7780+', desc: 'Additional session traffic', color: 'text-green-400' },
  { port: 'UDP 12346', desc: 'EmotiBit biometric data', color: 'text-purple-400' },
];

export function Architecture() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">System Architecture</h1>
        <p className="text-sm text-gray-400 mt-1">MCCVR network topology and hardware layout</p>
      </div>

      {/* Network Diagram */}
      <div className="rounded-xl bg-gray-900 border border-gray-700 p-6 mb-6">
        <h2 className="text-sm font-semibold text-gray-300 mb-4">Network Topology</h2>

        {/* Supervisor */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center max-w-xs">
            <Server className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-sm font-semibold text-purple-300">Supervisor Station</div>
            <div className="text-[10px] text-gray-400 mt-1">Acts as session host (bSupervisor=True)</div>
            <div className="text-[10px] text-gray-500">RTX 3070+, 32GB RAM, Win 11 Pro</div>
            <div className="text-[10px] text-gray-500">Live Wall + Dashboard + Report Gen</div>
          </div>
        </div>

        {/* Connection lines */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-8 bg-gray-600" />
            <Cable className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Network Switch */}
        <div className="flex justify-center mb-4">
          <div className="px-8 py-3 rounded-lg bg-gray-800 border border-gray-600 text-center">
            <Wifi className="w-5 h-5 text-accent mx-auto mb-1" />
            <div className="text-xs font-semibold text-gray-300">Gigabit Ethernet Switch</div>
            <div className="text-[10px] text-gray-500">All 9 PCs (wired) + Wireless Router (EmotiBit)</div>
          </div>
        </div>

        {/* Connection lines */}
        <div className="flex justify-center mb-4">
          <div className="w-0.5 h-8 bg-gray-600" />
        </div>

        {/* Operator Stations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {operatorStations.map(station => (
            <div key={station.id} className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/20 text-center">
              <Monitor className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <div className="text-xs font-semibold text-blue-300">{station.label}</div>
              <div className="text-[9px] text-gray-500 mt-1">{station.specs}</div>
              <div className="text-[9px] text-gray-600">{station.peripherals}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Port Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl bg-gray-900 border border-gray-700 p-5">
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Network Ports</h3>
          <div className="space-y-2">
            {ports.map(p => (
              <div key={p.port} className="flex items-center gap-3 p-2 rounded-lg bg-gray-800">
                <code className={`text-xs font-mono font-semibold ${p.color}`}>{p.port}</code>
                <span className="text-xs text-gray-400">{p.desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 p-2 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
            <p className="text-[10px] text-yellow-400">Windows Firewall must allow MCCVR through on all ports above.</p>
          </div>
        </div>

        <div className="rounded-xl bg-gray-900 border border-gray-700 p-5">
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Key Configuration</h3>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between p-2 rounded-lg bg-gray-800">
              <span className="text-gray-400">Server Config</span>
              <code className="text-gray-300 font-mono">Content/Configs/Server.json</code>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-gray-800">
              <span className="text-gray-400">Default IP</span>
              <code className="text-gray-300 font-mono">127.0.0.1</code>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-gray-800">
              <span className="text-gray-400">Session Port</span>
              <code className="text-gray-300 font-mono">7777</code>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-gray-800">
              <span className="text-gray-400">Engine</span>
              <code className="text-gray-300 font-mono">Unreal Engine 5.6</code>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-gray-800">
              <span className="text-gray-400">VR Runtime</span>
              <code className="text-gray-300 font-mono">OpenXR + SteamVR</code>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-gray-800">
              <span className="text-gray-400">Internet Required</span>
              <code className="text-green-400 font-mono">No (LAN only)</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
