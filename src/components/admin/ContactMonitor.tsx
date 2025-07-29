"use client";

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: any;
  status: string;
}

export default function ContactMonitor() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Real-time listener
    const q = query(collection(db, 'contacts'), orderBy('timestamp', 'desc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const contactsData: Contact[] = [];
      querySnapshot.forEach((doc) => {
        contactsData.push({
          id: doc.id,
          ...doc.data()
        } as Contact);
      });
      setContacts(contactsData);
      setLoading(false);
    }, (error) => {
      console.error('Error listening to contacts:', error);
      setLoading(false);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading contacts...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Contacts ({contacts.length})</CardTitle>
      </CardHeader>
      <CardContent>
        {contacts.slice(0, 5).map((contact) => (
          <div key={contact.id} className="border-b pb-2 mb-2 last:border-b-0">
            <p className="font-medium">{contact.name}</p>
            <p className="text-sm text-muted-foreground">{contact.email}</p>
            <p className="text-xs text-muted-foreground">
              {contact.timestamp?.toDate?.()?.toLocaleString() || 'No date'}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}