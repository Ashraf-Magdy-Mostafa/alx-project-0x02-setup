import { type CardProps } from "@/interfaces"
function Card({ title, description, content }: CardProps) {
    return (


        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{content}</p>
        </div>
    )
}

export default Card
