export const getCapacityStyles = (capacity: string) => {
  const trimmedCapacity = capacity.trim();
  switch (trimmedCapacity) {
    case "No Way":
      return "bg-[rgba(226,25,91,0.20)] text-[#E2195B]";
    case "High":
      return "bg-[rgba(48,172,4,0.20)] text-[#30AC04]";
    case "Outstanding":
      return "bg-[rgba(60,195,183,0.20)] text-[#22BBAD]";
    case "Minimum Acceptable":
      return "bg-[rgba(255,203,5,0.20)] text-[#8A6E03]";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export const getStatusStyles = (status: string) => {
  const trimmedStatus = status.trim();
  switch (trimmedStatus) {
    case "Cavab gözləyirik":
      return "bg-[rgba(16,49,127,0.20)] text-[#10317F]";
    case "Maraqlanır":
      return "bg-[rgba(23,92,255,0.20)] text-[#175CFF]";
    case "Almağı düşünür":
      return "bg-[rgba(4,172,124,0.20)] text-[#04AC7C]";
    case "Görüş istəyir":
      return "bg-[rgba(151,71,255,0.20)] text-[#9747FF]";
    case "Alıb":
      return "bg-[rgba(48,172,4,0.20);] text-[#30AC04]";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export const getSillabusStyles = (sillabus: string) => {
  const trimmedSillabus = sillabus.trim();
  switch (trimmedSillabus.toLowerCase()) {
    case "Məlumatlı":
      return "bg-[rgba(48,172,4,0.20)] text-[#30AC04]";
    case "Məlumatsız":
      return "bg-[rgba(255,203,5,0.20)] text-[#8A6E03]";
    case "Poor":
      return "bg-[rgba(226,25,91,0.20)] text-[#E2195B]";
    default:
      return "bg-gray-100 text-gray-600";
  }
};
