// languagesData.js

const languagesData = [
  {
    language: "c++",
    select: "C++",
    version: "10.2.0",
    aliases: ["cpp", "g++"],
    runtime: "gcc",
    displayName: "cpp",
    demoCode: "// Online C++ compiler to run C++ program online\n#include <iostream>\n\nint main() {\n    // Write C++ code here\n    std::cout << \"Hello World\";\n\n    return 0;\n}"
  },
    {
      language: "bash",
      select: "Bash",
      version: "5.2.0",
      aliases: ["sh"],
      displayName: "bash",
      demoCode: "#!/bin/bash\n\n# Write Bash code here\necho \"Hello World\""
    },
    {
      language: "dart",
      select: "Dart",
      version: "2.19.6",
      aliases: [],
      displayName: "dart",
      demoCode: "// Dart code to run Dart program online\nvoid main() {\n  // Write Dart code here\n  print('Hello World');\n}"
    },

    {
      language: "c",
      select: "C",
      version: "10.2.0",
      aliases: ["gcc"],
      runtime: "gcc",
      displayName: "c",
      demoCode: "#include <stdio.h>\n\nint main() {\n    // Write C code here\n    printf(\"Hello World\");\n    return 0;\n}"
    },
    
    {
      language: "go",
      select: "GO",
      version: "1.16.2",
      aliases: ["go", "golang"],
      displayName: "go",
      demoCode: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    // Write Go code here\n    fmt.Println(\"Hello World\")\n}"
    },
    {
      language: "java",
      select: "Java",
      version: "15.0.2",
      aliases: [],
      displayName: "java",
      demoCode: "public class Main {\n    public static void main(String[] args) {\n        // Write Java code here\n        System.out.println(\"Hello World\");\n    }\n}"
    },
    {
      language: "csharp",
      select: "C#",
      version: "6.12.0",
      aliases: ["mono", "mono-csharp", "mono-c#", "mono-cs", "c#", "cs"],
      runtime: "mono",
      displayName: "csharp",
      demoCode: "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // Write C# code here\n        Console.WriteLine(\"Hello World\");\n    }\n}"
    },
    {
      language: "javascript",
      select: "Javascript",
      version: "18.15.0",
      aliases: ["node-javascript", "node-js", "javascript", "js"],
      runtime: "node",
      displayName: "javaScript",
      demoCode: "// Node.js JavaScript code to run JavaScript program online\nconsole.log('Hello World');"
    },
    {
      language: "php",
      select: "PHP",
      version: "8.2.3",
      aliases: [],
      displayName: "php",
      demoCode: "<?php\n// Write PHP code here\necho \"Hello World\";\n?>"
    },
    {
      language: "powershell",
      select: "Powershell",
      version: "7.1.4",
      aliases: ["ps", "pwsh", "ps1"],
      runtime: "pwsh",
      displayName: "powershell",
      demoCode: "# PowerShell script to run PowerShell code online\nWrite-Host \"Hello World\""
    },
    {
      language: "python",
      select: "Python",
      version: "3.10.0",
      aliases: ["py", "py3", "python3", "python3.10"],
      displayName: "python",
      demoCode: "# Python code to run Python program online\nprint(\"Hello World\")"
    },
    {
      language: "rust",
      select: "Rust",
      version: "1.68.2",
      aliases: ["rs"],
      displayName: "rust",
      demoCode: "// Rust code to run Rust program online\nfn main() {\n    // Write Rust code here\n    println!(\"Hello World\");\n}"
    },
    {
      language: "typescript",
      select: "Typescript",
      version: "5.0.3",
      aliases: ["ts", "node-ts", "tsc", "typescript5", "ts5"],
      displayName: "typescript",
      demoCode: "// TypeScript code to run TypeScript program online\nconsole.log('Hello World');"
    }
  ];

  const initialSelected = languagesData.find(lang => lang.language === 'c++');
  
  export { initialSelected};
  export default languagesData;


  