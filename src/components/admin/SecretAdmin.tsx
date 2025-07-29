"use client";

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Eye, Trash2, X, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: any;
  status: string;
}

interface SecretAdminProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SecretAdmin({ isOpen, onClose }: SecretAdminProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const { toast } = useToast();

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'newchecks') {
      setIsAuthenticated(true);
      fetchContacts();
      toast({
        title: "Access Granted",
        description: "Welcome to the admin panel.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "Incorrect password.",
      });
    }
    setPassword('');
  };

  const fetchContacts = async () => {
    setLoading(true);
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
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch contacts.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (contactId: string) => {
    try {
      await deleteDoc(doc(db, 'contacts', contactId));
      setContacts(contacts.filter(c => c.id !== contactId));
      toast({
        title: "Deleted",
        description: "Contact deleted successfully.",
      });
    } catch (error) {
      console.error('Error deleting contact:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete contact.",
      });
    }
  };

  const handleStatusUpdate = async (contactId: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, 'contacts', contactId), {
        status: newStatus
      });
      setContacts(contacts.map(c => 
        c.id === contactId ? { ...c, status: newStatus } : c
      ));
      toast({
        title: "Updated",
        description: `Status updated to ${newStatus}.`,
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update status.",
      });
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'No date';
    
    try {
      if (timestamp.toDate) {
        return timestamp.toDate().toLocaleString();
      }
      return new Date(timestamp).toLocaleString();
    } catch (error) {
      return 'Invalid date';
    }
  };

  const handleClose = () => {
    setIsAuthenticated(false);
    setPassword('');
    setContacts([]);
    setSelectedContact(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <div>
              <DialogTitle className="text-2xl">🔒 Admin Panel</DialogTitle>
              <DialogDescription>
                {isAuthenticated ? 'Contact Form Management' : 'Enter password to access'}
              </DialogDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={handleClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {!isAuthenticated ? (
          <div className="py-8">
            <form onSubmit={handlePasswordSubmit} className="space-y-4 max-w-sm mx-auto">
              <div>
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-center"
                />
              </div>
              <Button type="submit" className="w-full">
                Access Admin Panel
              </Button>
            </form>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Header Stats */}
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <div className="text-sm">
                  <span className="font-medium">Total: </span>
                  <Badge variant="outline">{contacts.length}</Badge>
                </div>
                <div className="text-sm">
                  <span className="font-medium">New: </span>
                  <Badge variant="default">
                    {contacts.filter(c => c.status === 'new').length}
                  </Badge>
                </div>
                <div className="text-sm">
                  <span className="font-medium">Read: </span>
                  <Badge variant="secondary">
                    {contacts.filter(c => c.status === 'read').length}
                  </Badge>
                </div>
              </div>
              <Button onClick={fetchContacts} disabled={loading} size="sm">
                <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>

            {/* Contacts List */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {loading ? (
                <div className="text-center py-8">Loading contacts...</div>
              ) : contacts.length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground">No contact submissions yet.</p>
                  </CardContent>
                </Card>
              ) : (
                contacts.map((contact) => (
                  <Card key={contact.id} className="relative">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{contact.name}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <span>{contact.email}</span>
                            <Badge 
                              variant={contact.status === 'new' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {contact.status}
                            </Badge>
                          </CardDescription>
                          <p className="text-xs text-muted-foreground mt-1">
                            {formatDate(contact.timestamp)}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedContact(contact)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(contact.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="bg-muted p-3 rounded-md">
                        <p className="text-sm line-clamp-2">{contact.message}</p>
                      </div>
                      <div className="flex gap-2 mt-3">
                        {contact.status === 'new' && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleStatusUpdate(contact.id, 'read')}
                          >
                            Mark as Read
                          </Button>
                        )}
                        {contact.status === 'read' && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleStatusUpdate(contact.id, 'replied')}
                          >
                            Mark as Replied
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        )}

        {/* Contact Detail Modal */}
        {selectedContact && (
          <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{selectedContact.name}</DialogTitle>
                <DialogDescription>{selectedContact.email}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Message:</h4>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="whitespace-pre-wrap">{selectedContact.message}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Submitted: {formatDate(selectedContact.timestamp)}</span>
                  <Badge variant={selectedContact.status === 'new' ? 'default' : 'secondary'}>
                    {selectedContact.status}
                  </Badge>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </DialogContent>
    </Dialog>
  );
}