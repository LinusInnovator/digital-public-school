import React from 'react';
import { UserRole } from '../types';

interface RoleSwitcherProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export default function RoleSwitcher({ currentRole, onRoleChange }: RoleSwitcherProps) {
  return (
    <div className="fixed top-4 right-4 bg-white rounded-lg shadow-md p-2 z-50">
      <select
        value={currentRole}
        onChange={(e) => onRoleChange(e.target.value as UserRole)}
        className="text-sm border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="teacher">Teacher View</option>
        <option value="student">Student View</option>
        <option value="caretaker">Caretaker View</option>
      </select>
    </div>
  );
}