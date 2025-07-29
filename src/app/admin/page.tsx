"use client";

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: any;
  status: string;
}

export default function AdminPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const q = query(collection(db, 'contacts'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        const contactsData: Contact[] = [];
        
        querySnapshot.forEach((doc) => {
          contactsData.push({
            id: doc.id,
            ...doc.data()
          } as Contact);
        });
        
        setContacts(contactsData);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'No date';
    
    try {
      // Handle Firestore timestamp
      if (timestamp.toDate) {
        return timestamp.toDate().toLocaleString();
      }
      // Handle regular date
      return new Date(timestamp).toLocaleString();
    } catch (error) {
      return 'Invalid date';
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Contact Form Submissions</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Form Submissions</h1>
      <p className="text-muted-foreground mb-6">Total submissions: {contacts.length}</p>
      
      <div className="space-y-4">
        {contacts.length === 0 ? (
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">No contact submissions yet.</p>
            </CardContent>
          </Card>
        ) : (
          contacts.map((contact) => (
            <Card key={contact.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{contact.name}</CardTitle>
                    <CardDescription>{contact.email}</CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant={contact.status === 'new' ? 'default' : 'secondary'}>
                      {contact.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">
                      {formatDate(contact.timestamp)}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md">
                  <p className="whitespace-pre-wrap">{contact.message}</p>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}