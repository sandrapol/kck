/*package com.example.demo.components;


import java.util.stream.Collectors;

/**
 * Created by Sandra on 2018-11-02.
 */
/*@Slf4j
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@ShellComponent
@ShellCommandGroup("User commands")
public class UserCommands {
    private final UserRepo userRepo;
    @ShellMethod("Show users")
    public String showUsers() {
        return userRepo.findAll().stream()
                .map(User::toString)
                .collect(Collectors.joining("\n"));
    }
    @ShellMethod("Create new user (lastName, login, password)")
    public String createNewUser(String lastName, String login, String password) {

        if (password.isEmpty())
            return "Problem with encryption";
        User user = new User(null, lastName, login, password);
        user = userRepo.save(user);
        return "User created succesfully: \n" + user.toString();
    }
}
*/