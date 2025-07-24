import { type GetStaticProps } from 'next';
import Head from 'next/head';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';
import Header from '@/components/layout/Header';



interface UsersPageProps {
    users: UserProps[];
}

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: UserProps[] = await res.json();

    return {
        props: { users },
    };
};

export default function UsersPage({ users }: UsersPageProps) {
    return (
        <>
            <Head>
                <title>Users | MyApp</title>
            </Head>
            <Header />

            <main className="max-w-6xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">User Directory</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <UserCard
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            address={user.address}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}
