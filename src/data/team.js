export const team = Array.from({ length: 7 }).map((_, index) => ({
  id: index + 1,
  name: "Member Name",
  designation: "Designation",
  image: "", // Use empty string to show generic silhouette
  linkedin: "#",
  email: "#"
}));
