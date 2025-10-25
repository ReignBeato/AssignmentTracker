// import { useMemo, useState } from "react";
// import "./Dashboard.css";

// export default function Dashboard() {
//   // drawer open/close
//   const [open, setOpen] = useState(true);
//   // which left menu item is active
//   const [active, setActive] = useState("Students");

//   // demo rows – swap with API data later
//   const rows = [
//     { role: "Students",  name: "Ava Patel",   id: "STU-101", assignments: 7,  progress: 76 },
//     { role: "Students",  name: "Liam Chen",   id: "STU-102", assignments: 5,  progress: 42 },
//     { role: "Students",  name: "Noah Singh",  id: "STU-103", assignments: 9,  progress: 88 },
//     { role: "Lecturers", name: "Dr. Khan",    id: "LEC-201", assignments: 12, progress: 100 },
//     { role: "Lecturers", name: "Ms. Brown",   id: "LEC-202", assignments: 9,  progress: 91 },
//     { role: "LS",        name: "T. Williams", id: "LS-301",  assignments: 3,  progress: 60 },
//   ];

//   const filtered = useMemo(() => rows.filter(r => r.role === active), [active]);

//   return (
//     <div className="dash-shell">
//       {/* Top bar */}
//       <header className="dash-topbar">
//         <button className="dash-hamburger" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
//           <span /><span /><span />
//         </button>

//         <div className="dash-brand">
//           <img src="/images/trackers.jpg" alt="logo" className="dash-brandLogo" />
//           <h1 className="dash-brandTitle">Assignment Tracker</h1>
//         </div>

//         <div className="dash-spacer" />
//         <div className="dash-date">{new Date().toLocaleDateString()}</div>
//       </header>

//       {/* Left drawer */}
//       <aside className={`dash-drawer ${open ? "open" : ""}`}>
//         <div className="dash-drawerLogo">
//           <img src="/images/trackers.jpg" alt="logo" />
//         </div>
//         <nav className="dash-drawerNav">
//           {["Students", "Lecturers", "LS"].map(item => (
//             <button
//               key={item}
//               className={`dash-drawerLink ${active === item ? "active" : ""}`}
//               onClick={() => setActive(item)}
//             >
//               {item}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* Content */}
//       <main className={`dash-content ${open ? "with-drawer" : ""}`}>
//         <section className="dash-card dash-headRow">
//           <h2 className="dash-tableTitle">{active}</h2>
//         </section>

//         <section className="dash-card">
//           <div className="dash-tableWrap">
//             <table className="dash-grid">
//               <thead>
//                 <tr>
//                   <th style={{ width: "38%" }}>NAME</th>
//                   <th style={{ width: "18%" }}>ID</th>
//                   <th style={{ width: "20%" }}>ASSIGNMENTS</th>
//                   <th style={{ width: "24%" }}>PROGRESS</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filtered.map(r => (
//                   <tr key={r.id}>
//                     <td>{r.name}</td>
//                     <td>{r.id}</td>
//                     <td>{r.assignments}</td>
//                     <td>
//                       <div className="dash-progress">
//                         <div className="dash-progressBar" style={{ width: `${r.progress}%` }} />
//                         <span className="dash-progressText">{r.progress}%</span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//                 {filtered.length === 0 && (
//                   <tr>
//                     <td colSpan="4" className="dash-empty">No records</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


// src/Dashboard.js
import { useEffect, useMemo, useState } from "react";
import "./Dashboard.css";

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [section, setSection] = useState("Assignments");

  // ---------- Assignments (persist to localStorage) ----------
  const [assignments, setAssignments] = useState(() => {
    const saved = localStorage.getItem("assignments");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  // Form state
  const [form, setForm] = useState({ id: null, title: "", description: "", dueDate: "" });

  // Toasts
  const [toast, setToast] = useState({ type: "", text: "", open: false });
  const showToast = (type, text) => {
    setToast({ type, text, open: true });
    setTimeout(() => setToast(t => ({ ...t, open: false })), 2000);
  };

  const resetForm = () => setForm({ id: null, title: "", description: "", dueDate: "" });

  // Validation
  const validate = () => {
    if (!form.title.trim() || !form.description.trim() || !form.dueDate) {
      showToast("error", "Please fill Title, Description and Due Date.");
      return false;
    }
    const today = new Date(); today.setHours(0,0,0,0);
    if (new Date(form.dueDate) < today) {
      showToast("error", "Due date cannot be in the past.");
      return false;
    }
    return true;
  };

  // Create / Update
  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (form.id) {
      setAssignments(prev => prev.map(a => (a.id === form.id ? { ...form } : a)));
      showToast("success", "Assignment updated.");
    } else {
      setAssignments(prev => [{ id: Date.now(), ...form }, ...prev]);
      showToast("success", "Assignment created.");
    }
    resetForm();
  };

  // Edit / Delete
  const onEdit = (a) => {
    setForm(a);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const onDelete = (id) => {
    setAssignments(prev => prev.filter(a => a.id !== id));
    showToast("success", "Assignment deleted.");
  };

  // Demo table data for other sections
  const directory = [
    { role: "Students",  name: "Ava Patel",   id: "STU-101", assignments: 7,  progress: 76 },
    { role: "Students",  name: "Liam Chen",   id: "STU-102", assignments: 5,  progress: 42 },
    { role: "Lecturers", name: "Dr. Khan",    id: "LEC-201", assignments: 12, progress: 100 },
    { role: "Lecturers", name: "Ms. Brown",   id: "LEC-202", assignments: 9,  progress: 91 },
    { role: "LS",        name: "T. Williams", id: "LS-301",  assignments: 3,  progress: 60 },
  ];
  const filteredDirectory = useMemo(
    () => directory.filter(r => r.role === section),
    [directory, section]
  );

  return (
    <div className="ds-shell">
      {/* Topbar */}
      <header className="ds-topbar">
        <button className="ds-hamburger" onClick={() => setDrawerOpen(v => !v)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>

        <div className="ds-brand">
          <img src="/images/trackers.jpg" alt="logo" className="ds-logo" />
          <h1 className="ds-title">Assignment Tracker</h1>
        </div>

        <div className="ds-spacer" />
        <div className="ds-date">{new Date().toLocaleDateString()}</div>
      </header>

      {/* Drawer */}
      <aside className={`ds-drawer ${drawerOpen ? "open" : ""}`}>
        <div className="ds-drawerHead">
          <img src="/images/trackers.jpg" alt="logo" />
        </div>
        <nav className="ds-nav">
          {["Assignments", "Students", "Lecturers", "LS"].map(item => (
            <button
              key={item}
              className={`ds-navItem ${section === item ? "active" : ""}`}
              onClick={() => setSection(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className={`ds-content ${drawerOpen ? "with-drawer" : ""}`}>
        {/* Section header */}
        <div className="ds-card ds-head">
          <h2 className="ds-sectionTitle">
            {section === "Assignments" ? "Create & Manage Assignments" : `${section} — Overview`}
          </h2>
        </div>

        {/* ASSIGNMENTS SECTION */}
        {section === "Assignments" ? (
          <>
            {/* Toasts */}
            <div className={`ds-toast ${toast.open ? "show" : ""} ${toast.type}`}>
              {toast.text}
            </div>

            {/* Form */}
            <section className="ds-card">
              <form className="ds-form" onSubmit={onSubmit}>
                <div className="ds-grid">
                  <label className="ds-field">
                    <span>Assignment Title</span>
                    <input
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                      placeholder="e.g., Data Structures Week 3"
                    />
                  </label>

                  <label className="ds-field">
                    <span>Due Date</span>
                    <input
                      type="date"
                      value={form.dueDate}
                      onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                    />
                  </label>

                  <label className="ds-field ds-col-span-2">
                    <span>Instructions / Description</span>
                    <textarea
                      rows={3}
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      placeholder="Add guidance, resources, and submission notes..."
                    />
                  </label>
                </div>

                <div className="ds-actions">
                  <button type="submit" className="ds-btn ds-btnPrimary">
                    {form.id ? "Update Assignment" : "Create Assignment"}
                  </button>
                  {form.id && (
                    <button type="button" className="ds-btn ds-btnGhost" onClick={resetForm}>
                      Cancel Edit
                    </button>
                  )}
                </div>
              </form>
            </section>

            {/* List */}
            <section className="ds-card">
              <div className="ds-listHead">
                <h3>All Assignments</h3>
              </div>

              {assignments.length === 0 ? (
                <p className="ds-empty">No assignments yet. Create your first one above.</p>
              ) : (
                <ul className="ds-list">
                  {assignments.map(a => (
                    <li key={a.id} className="ds-listItem">
                      <div className="ds-itemMain">
                        <h4>{a.title}</h4>
                        <p className="ds-desc">{a.description}</p>
                        <div className="ds-meta">
                          <span className="ds-chip">
                            Due: <strong>{a.dueDate}</strong>
                          </span>
                        </div>
                      </div>
                      <div className="ds-itemActions">
                        <button className="ds-btn ds-btnSmall" onClick={() => onEdit(a)}>Edit</button>
                        <button className="ds-btn ds-btnDanger ds-btnSmall" onClick={() => onDelete(a.id)}>Delete</button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        ) : (
          // DIRECTORY TABLE for Students / Lecturers / LS
          <section className="ds-card">
            <div className="ds-tableWrap">
              <table className="ds-table">
                <thead>
                  <tr>
                    <th style={{width:"40%"}}>NAME</th>
                    <th style={{width:"20%"}}>ID</th>
                    <th style={{width:"20%"}}>ASSIGNMENTS</th>
                    <th style={{width:"20%"}}>PROGRESS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDirectory.map(row => (
                    <tr key={row.id}>
                      <td>{row.name}</td>
                      <td>{row.id}</td>
                      <td>{row.assignments}</td>
                      <td>
                        <div className="ds-progress">
                          <div className="ds-progressBar" style={{ width: `${row.progress}%` }} />
                          <span className="ds-progressText">{row.progress}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredDirectory.length === 0 && (
                    <tr><td colSpan={4} className="ds-empty">No records</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
