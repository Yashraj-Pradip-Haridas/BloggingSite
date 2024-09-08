import "./App.css";
import light from "./assets/light.png";
import BlogCard from "./BlogData";
import NavBar from "./NavBar";
function App() {
  const handleEdit = () => {
    alert("Edit button clicked");
  };

  const handleDelete = () => {
    alert("Delete button clicked");
  };

  return (
    <div className="App">
      <NavBar />
      <div style={{ padding: "20px" }}>
        <BlogCard
          title="Flexbox in React"
          author="Jane Doe"
          description="This blog post will help you understand how to use Flexbox for building responsive layouts in React components."
          imageUrl={light}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <BlogCard
          title="Understanding React"
          author="John Doe"
          description="This is a short description of the blog post. React is a powerful JavaScript library for building user interfaces."
          imageUrl={light}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
