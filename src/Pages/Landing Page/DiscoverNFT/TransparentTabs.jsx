import { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Card from "./Card";

const TransparentTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [cards, setCards] = useState([]);
  const [displayedCards, setDisplayedCards] = useState(12);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = () => {
    fetch("/cardData.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const tabData = [
    {
      label: (
        <button
          className={`w-fit text-sm lg:text-md font-semibold px-6 py-2 rounded-full ${
            activeTab === "all"
              ? "bg-[#3a0ca3] text-white"
              : "bg-transparent duration-300"
          } border-2 border-[#3a0ca3] text-[#3a0ca3]`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
      ),
      value: "all",
    },
    {
      label: (
        <button
          className={`w-fit text-sm lg:text-md font-semibold px-6 py-2 rounded-full ${
            activeTab === "art"
              ? "bg-[#3a0ca3] text-white"
              : "bg-transparent duration-300"
          } border-2 border-[#3a0ca3] text-[#3a0ca3]`}
          onClick={() => setActiveTab("art")}
        >
          Art
        </button>
      ),
      value: "art",
    },
    {
      label: (
        <button
          className={`w-fit text-sm lg:text-md font-semibold px-6 py-2 rounded-full ${
            activeTab === "celebrates"
              ? "bg-[#3a0ca3] text-white"
              : "bg-transparent duration-300"
          } border-2 border-[#3a0ca3] text-[#3a0ca3]`}
          onClick={() => setActiveTab("celebrates")}
        >
          Celebrates
        </button>
      ),
      value: "celebrates",
    },
    {
      label: (
        <button
          className={`w-fit text-sm lg:text-md font-semibold px-6 py-2 rounded-full ${
            activeTab === "gaming"
              ? "bg-[#3a0ca3] text-white"
              : "bg-transparent duration-300"
          } border-2 border-[#3a0ca3] text-[#3a0ca3]`}
          onClick={() => setActiveTab("gaming")}
        >
          Gaming
        </button>
      ),
      value: "gaming",
    },
    {
      label: (
        <button
          className={`w-fit text-sm lg:text-md font-semibold px-6 py-2 rounded-full ${
            activeTab === "sport"
              ? "bg-[#3a0ca3] text-white"
              : "bg-transparent duration-300"
          } border-2 border-[#3a0ca3] text-[#3a0ca3]`}
          onClick={() => setActiveTab("sport")}
        >
          Sport
        </button>
      ),
      value: "sport",
    },
    {
      label: (
        <button
          className={`w-fit text-sm lg:text-md font-semibold px-6 py-2 rounded-full ${
            activeTab === "music"
              ? "bg-[#3a0ca3] text-white"
              : "bg-transparent duration-300"
          } border-2 border-[#3a0ca3] text-[#3a0ca3]`}
          onClick={() => setActiveTab("music")}
        >
          Music
        </button>
      ),
      value: "music",
    },
    {
      label: (
        <button
          className={`w-fit text-sm lg:text-md font-semibold px-6 py-2 rounded-full ${
            activeTab === "crypto"
              ? "bg-[#3a0ca3] text-white"
              : "bg-transparent duration-300"
          } border-2 border-[#3a0ca3] text-[#3a0ca3]`}
          onClick={() => setActiveTab("crypto")}
        >
          Crypto
        </button>
      ),
      value: "crypto",
    },
  ];

  const filteredCards = cards.filter(
    (card) => activeTab === "all" || card.title.toLowerCase() === activeTab
  );

  const visibleCards = filteredCards.slice(0, displayedCards);

  return (
    <div>
      <Tabs value={activeTab} className="lg:max-w-[50rem] py-6">
        <TabsHeader
          className="bg-transparent overflow-x-auto md:overflow-x-hidden"
          indicatorProps={{
            className: "bg-gray-900/10 shadow-none text-gray-900",
          }}
        >
          {tabData.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="w-[80vw] mx-auto">
          <TabPanel value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {visibleCards.map((card, index) => (
                <Card key={index} card={card} />
              ))}
            </div>
            {filteredCards.length > displayedCards && (
              <div className={`mt-12 flex justify-center mt-4 ${displayedCards > 12 ? "hidden" : "block"}`}>
                <button
                  onClick={() => setDisplayedCards(displayedCards + 12)}
                  className="w-fit text-white text-sm lg:text-md font-semibold px-6 py-2 rounded-full bg-[#3a0ca3] border-2 border-[#3a0ca3] hover:text-[#3a0ca3] duration-300 hover:bg-[transparent]"
                >
                  See More
                </button>
              </div>
            )}
            {displayedCards > 12 && (
              <div className="mt-12 flex justify-center mt-2">
                <button
                  onClick={() => setDisplayedCards(12)}
                  className="w-fit text-white text-sm lg:text-md font-semibold px-6 py-2 rounded-full bg-[#3a0ca3] border-2 border-[#3a0ca3] hover:text-[#3a0ca3] duration-300 hover:bg-[transparent]"
                >
                  See Less
                </button>
              </div>
            )}
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TransparentTabs;
