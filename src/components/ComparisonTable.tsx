
import { Check, X } from "lucide-react";

export const ComparisonTable = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Traditional Retirement Accounts vs. Annuities Comparison
          </h2>
          <p className="text-xl text-gray-600">See the clear difference in protection and benefits</p>
        </div>
        
        <div className="overflow-x-auto bg-white rounded-2xl shadow-xl">
          <table className="w-full">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="p-4 text-left font-bold">Feature</th>
                <th className="p-4 text-center font-bold">Traditional 401(k)/IRA/Roth</th>
                <th className="p-4 text-center font-bold bg-gold-500 text-navy-900">Growth Fixed Indexed Annuities</th>
                <th className="p-4 text-center font-bold">Income Annuities</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Tax-Deferred Growth",
                  traditional: true,
                  growth: true,
                  income: true
                },
                {
                  feature: "Market Risk",
                  traditional: { icon: false, text: "Subject to losses" },
                  growth: { icon: true, text: "Market-Protected" },
                  income: { icon: true, text: "Market-Protected" }
                },
                {
                  feature: "Lifetime Guaranteed Income",
                  traditional: { icon: false, text: "No guarantee" },
                  growth: { icon: true, text: "Optional" },
                  income: { icon: true, text: "Built-in" }
                },
                {
                  feature: "Withdrawal Flexibility",
                  traditional: { icon: true, text: "but taxed" },
                  growth: { icon: true, text: "with tax deferral" },
                  income: { icon: true, text: "with income schedule" }
                },
                {
                  feature: "Fees",
                  traditional: { icon: false, text: "Varies, often high" },
                  growth: { icon: true, text: "Low or No fees" },
                  income: { icon: true, text: "Minimal fees" }
                },
                {
                  feature: "Death Benefit",
                  traditional: { icon: false, text: "Limited" },
                  growth: { icon: true, text: "Included" },
                  income: { icon: true, text: "Included" }
                },
                {
                  feature: "Inflation Protection (Optional)",
                  traditional: { icon: false, text: "Rare" },
                  growth: { icon: true, text: "Indexed Options" },
                  income: { icon: true, text: "Payout Riders" }
                }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-4 font-semibold text-navy-900">{row.feature}</td>
                  <td className="p-4 text-center">
                    {typeof row.traditional === 'boolean' ? (
                      row.traditional ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )
                    ) : (
                      <div className="flex flex-col items-center">
                        {row.traditional.icon ? (
                          <Check className="w-6 h-6 text-green-500 mb-1" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mb-1" />
                        )}
                        <span className="text-sm text-gray-600">{row.traditional.text}</span>
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-center bg-gold-50">
                    {typeof row.growth === 'boolean' ? (
                      row.growth ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )
                    ) : (
                      <div className="flex flex-col items-center">
                        {row.growth.icon ? (
                          <Check className="w-6 h-6 text-green-500 mb-1" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mb-1" />
                        )}
                        <span className="text-sm text-gray-600 font-medium">{row.growth.text}</span>
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {typeof row.income === 'boolean' ? (
                      row.income ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )
                    ) : (
                      <div className="flex flex-col items-center">
                        {row.income.icon ? (
                          <Check className="w-6 h-6 text-green-500 mb-1" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mb-1" />
                        )}
                        <span className="text-sm text-gray-600">{row.income.text}</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
