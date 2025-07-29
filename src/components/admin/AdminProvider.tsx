"use client";

import { useSecretAdmin } from '@/hooks/use-secret-admin';
import SecretAdmin from './SecretAdmin';

export default function AdminProvider() {
  const { isAdminOpen, closeAdmin } = useSecretAdmin();

  return (
    <SecretAdmin 
      isOpen={isAdminOpen} 
      onClose={closeAdmin} 
    />
  );
}