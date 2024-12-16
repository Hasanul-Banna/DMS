'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default function SettingsPage() {
  const [adServer, setAdServer] = useState('');
  const [adDomain, setAdDomain] = useState('');
  const [exchangeServer, setExchangeServer] = useState('');

  const saveSettings = () => {
    // TODO: Implement actual settings save logic
    console.log('Settings saved:', { adServer, adDomain, exchangeServer });
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <Card className="p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveSettings();
            }}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="adServer">Active Directory Server</Label>
              <Input id="adServer" value={adServer} onChange={(e) => setAdServer(e.target.value)} placeholder="AD Server Address" />
            </div>
            <div>
              <Label htmlFor="adDomain">Active Directory Domain</Label>
              <Input id="adDomain" value={adDomain} onChange={(e) => setAdDomain(e.target.value)} placeholder="AD Domain" />
            </div>
            <div>
              <Label htmlFor="exchangeServer">Microsoft Exchange Server</Label>
              <Input
                id="exchangeServer"
                value={exchangeServer}
                onChange={(e) => setExchangeServer(e.target.value)}
                placeholder="Exchange Server Address"
              />
            </div>
            <Button type="submit">Save Settings</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
