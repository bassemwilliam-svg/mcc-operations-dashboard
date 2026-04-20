import { Shield, Calendar, AlertTriangle } from 'lucide-react';

interface InventoryItem {
  name: string;
  quantity: number;
  category: string;
  warrantyType: string;
  warrantyExpiry: string;
  notes: string;
}

const inventory: InventoryItem[] = [
  { name: 'HTC Vive Focus Vision', quantity: 8, category: 'VR Headset', warrantyType: 'Standard (1 year)', warrantyExpiry: 'Feb 2027', notes: 'Operator headsets. Eye tracking enabled.' },
  { name: 'EmotiBit Biometric Sensor', quantity: 8, category: 'Sensor', warrantyType: 'Standard', warrantyExpiry: 'Feb 2027', notes: 'Wrist-worn. Measures HR, EDA, temperature.' },
  { name: 'Operator PC', quantity: 8, category: 'Workstation', warrantyType: '3-year on-site', warrantyExpiry: 'Feb 2029', notes: 'RTX 3070+, 32GB RAM, Win 11 Pro. High-performance GPU required.' },
  { name: 'Supervisor PC', quantity: 1, category: 'Workstation', warrantyType: '3-year on-site', warrantyExpiry: 'Feb 2029', notes: 'Same specs as operator. Runs as session host.' },
  { name: 'Network Switch', quantity: 1, category: 'Network', warrantyType: 'Standard', warrantyExpiry: 'Feb 2029', notes: 'Gigabit Ethernet. Connects all 9 PCs.' },
  { name: 'UPS Battery Backup', quantity: 1, category: 'Power', warrantyType: 'Standard', warrantyExpiry: 'Feb 2029', notes: '10-15 min backup. Protects against power outages.' },
];

const licenses = [
  { name: 'MCCVR Application (OEM)', type: 'Perpetual', renewal: 'N/A', notes: 'Included with initial setup' },
  { name: 'Windows 10/11 Pro (OEM)', type: 'Perpetual', renewal: 'N/A', notes: 'Per-device license' },
  { name: 'Proxmox VE Enterprise', type: 'Annual', renewal: 'Feb 2027', notes: 'Required annual renewal' },
  { name: 'Vive Care Extended Warranty', type: 'Annual (Optional)', renewal: 'Feb 2027', notes: 'Recommended for headset coverage' },
];

export function HardwareInventory() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">Hardware Inventory & Warranties</h1>
        <p className="text-sm text-gray-400 mt-1">All equipment with warranty dates and license details</p>
      </div>

      {/* Renewal Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-700">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <Shield className="w-3.5 h-3.5" /> Total Equipment
          </div>
          <div className="text-xl font-bold text-accent">27</div>
          <div className="text-[10px] text-gray-500">Across all categories</div>
        </div>
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-700">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <Calendar className="w-3.5 h-3.5" /> Nearest Warranty Expiry
          </div>
          <div className="text-xl font-bold text-yellow-400">Feb 2027</div>
          <div className="text-[10px] text-gray-500">VR headsets &amp; sensors</div>
        </div>
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-700">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <Calendar className="w-3.5 h-3.5" /> Next License Renewal
          </div>
          <div className="text-xl font-bold text-accent">Feb 2027</div>
          <div className="text-[10px] text-gray-500">Software licenses</div>
        </div>
      </div>

      {/* Hardware Table */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
          <Shield className="w-4 h-4 text-accent" />
          Equipment
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-700">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800 text-left">
                <th className="px-4 py-3 text-xs font-semibold text-gray-400">Equipment</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-400">Qty</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-400">Warranty</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-400">Expiry</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-400">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {inventory.map(item => (
                <tr key={item.name} className="bg-gray-900 hover:bg-gray-850">
                  <td className="px-4 py-3 text-sm font-medium text-gray-200">{item.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{item.quantity}</td>
                  <td className="px-4 py-3 text-xs text-gray-400">{item.warrantyType}</td>
                  <td className="px-4 py-3 text-xs">
                    <span className={item.warrantyExpiry === 'Feb 2027' ? 'text-yellow-400' : 'text-green-400'}>
                      {item.warrantyExpiry}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500 max-w-xs">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Software Licenses */}
      <div>
        <h2 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-green-400" />
          Software Licenses
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-700">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800 text-left">
                <th className="px-4 py-3 text-xs font-semibold text-gray-400">License</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-400">Type</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-400">Renewal</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-400">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {licenses.map(lic => (
                <tr key={lic.name} className="bg-gray-900 hover:bg-gray-850">
                  <td className="px-4 py-3 text-sm font-medium text-gray-200">{lic.name}</td>
                  <td className="px-4 py-3 text-xs text-gray-400">{lic.type}</td>
                  <td className="px-4 py-3 text-xs text-gray-400">{lic.renewal}</td>
                  <td className="px-4 py-3 text-xs text-gray-500">{lic.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Warning */}
      <div className="mt-6 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
        <div>
          <div className="text-xs font-semibold text-yellow-400">Renewal Reminder</div>
          <div className="text-xs text-gray-400 mt-0.5">
            The Proxmox VE Enterprise license must be renewed by February 2027. Please coordinate with your procurement team well in advance.
            The Vive Care extended warranty is recommended to ensure headset coverage beyond the standard period.
          </div>
        </div>
      </div>
    </div>
  );
}
