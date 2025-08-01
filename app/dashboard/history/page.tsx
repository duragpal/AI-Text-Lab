import { Copy, FileText, Hash } from 'lucide-react';
import Image from 'next/image';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { desc } from 'drizzle-orm';


export default async function HistoryPage() {
  // Fetch history from DB

  const historyData = await db.select().from(AIOutput).orderBy(desc(AIOutput.id));

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">History</h1>
      <p className="text-gray-500 mb-6">Search your previously generate AI content</p>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TEMPLATE</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AI RESP</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WORDS</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">COPY</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {historyData.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-8 text-gray-400">No history found.</td>
              </tr>
            ) : historyData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                  {row.slugIcon ? (
                    <Image src={row.slugIcon} alt="icon" width={28} height={28} className="rounded" />
                    
                  ) : null}
                  <span className="font-medium">{row.templateSlug}</span>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap max-w-xs truncate text-gray-700">
                  {row.aiResponse}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{row.createdAt || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{row.aiResponse ? row.aiResponse.split(/\s+/).length : 0}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-violet-600 hover:underline flex items-center gap-1">
                    <Copy />
                    <span>Copy</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


