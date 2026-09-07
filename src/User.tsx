import { Link, useParams } from "react-router-dom";

type UserProfile = {
  name: string;
  role: string;
  detail: string;
  skills: string[];
};

const profiles: Record<string, UserProfile> = {
  "10": {
    name: "Bhabesh Saha",
    role: "UI Technical Lead",
    detail: "Frontend architecture, reusable components and engineering leadership.",
    skills: ["React", "TypeScript", "Architecture"],
  },
  "11": {
    name: "Frontend Architecture",
    role: "Design systems and shared UI",
    detail: "Creating consistent, accessible and maintainable experiences at scale.",
    skills: ["Components", "Accessibility", "Design systems"],
  },
  "12": {
    name: "Technical Leadership",
    role: "Mentoring and delivery quality",
    detail: "Helping teams make confident technical decisions and ship great products.",
    skills: ["Mentoring", "Reviews", "Delivery"],
  },
};

function User() {
  const { id } = useParams<{ id: string }>();
  const profile = id ? profiles[id] : undefined;

  return (
    <main className="user-page">
      <section className="user-card" aria-labelledby="user-title">
        <div className="user-card-topline">
          <p className="eyebrow">Dynamic route · /user/{id}</p>
          <span className="user-route-mark">{id}</span>
        </div>
        {profile ? (
          <>
            <span className="user-id">ID {id}</span>
            <h2 id="user-title">{profile.name}</h2>
            <h3>{profile.role}</h3>
            <p>{profile.detail}</p>
            <div className="user-skills" aria-label="Profile skills">
              {profile.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </>
        ) : (
          <>
            <span className="user-id">ID {id ?? "unknown"}</span>
            <h2 id="user-title">Profile not found</h2>
            <p>There is no profile connected to this user ID yet.</p>
          </>
        )}
        <Link className="secondary-button" to="/">
          Back home <span aria-hidden="true">-&gt;</span>
        </Link>
      </section>
    </main>
  );
}

export default User;