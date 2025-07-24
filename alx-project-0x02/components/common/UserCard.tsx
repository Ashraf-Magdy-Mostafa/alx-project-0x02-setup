import { type FC } from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: FC<UserProps> = ({ name, email, address }: UserProps) => {
    return (
        <div className="bg-white rounded-lg shadow p-5 border border-gray-100 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-bold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-600">{email}</p>
            <div className="text-xs text-gray-500 mt-2">
                <p>{address.street}, {address.suite}</p>
                <p>{address.city}, {address.zipcode}</p>
            </div>
        </div>
    );
};

export default UserCard;
