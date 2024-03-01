https://expressjs-todo.onrender.com/api/v1/tasks/newTask

app.use("/api/v1/users", UserRouter);
app.use("/api/v1/tasks", TaskRouter);

router.get("/all", getAllUser);

router.post("/register", register);
router.post("/login", login);

router.get("/getUserbyID", isAuthenticated, getUserbyID);
router.get("/logout", logout);


router.post("/newTask", isAuthenticated, newTask);
router.get("/getAllTask", isAuthenticated, getAllTask);
router.route("/:id").put(isAuthenticated, updateTask).delete(isAuthenticated, deleteTask);
