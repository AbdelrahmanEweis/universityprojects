#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <sstream>
#include <unordered_map>
#include <queue>
#include <stack>
#include <algorithm>
#include <bits/stdc++.h>
using namespace std;

vector<string> tokenize(const string &filename)
{
    ifstream file(filename);
    vector<string> tokens;
    string line;
    while (getline(file, line))
    {
        stringstream lineStream(line);
        string token;
        while (lineStream >> token)
        {
            transform(token.begin(), token.end(), token.begin(), ::tolower);
            tokens.push_back(token);
        }
    }
    return tokens;
}

int levenshteinDistance(const std::string &s1, const std::string &s2)
{
    int dp[s1.size() + 1][s2.size() + 1];
    for (int i = 0; i <= s1.size(); i++)
    {
        dp[i][0] = i;
    }
    for (int j = 0; j <= s2.size(); j++)
    {
        dp[0][j] = j;
    }
    for (int i = 1; i <= s1.size(); i++)
    {
        for (int j = 1; j <= s2.size(); j++)
        {
            if (s1[i - 1] == s2[j - 1])
            {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else
            {
                dp[i][j] = std::min({dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]}) + 1;
            }
        }
    }
    return dp[s1.size()][s2.size()];
}
// this function takes the dictionary hash table and a string of the word you want to spell check
stack<string> misspellGuesses(unordered_map<int, string> dict, string str)
{
    // the function then adds the original string and levinshteinDistances the guesses to a hash table called guessList
    unordered_map<int, string> guessList;
    guessList[0] = str;
    stack<string> filteredGuessList;
    if (str[str.length() - 1] == '.')
    {
        for (int i = 0; i < dict.size(); i++)
        {
            if (dict[i] + '.' == str)
            {
                filteredGuessList.push(str);
                return filteredGuessList;
            }
            if (guessList[levenshteinDistance(str, dict[i])] == "")
                guessList[levenshteinDistance(str, dict[i])] = dict[i] + '.';
            else
            {
                guessList[levenshteinDistance(str, dict[i]) + 1] = dict[i] + '.';
            }
        }
    }
    else
    {
        for (int i = 0; i < dict.size(); i++)
        {
            if (dict[i] == str)
            {
                filteredGuessList.push(str);
                return filteredGuessList;
            }
            if (guessList[levenshteinDistance(str, dict[i])] == "")
                guessList[levenshteinDistance(str, dict[i])] = dict[i];
            else
            {
                guessList[levenshteinDistance(str, dict[i]) + 1] = dict[i];
            }
        }
    }
    int i = 0;
    // after hashing the dictionary words based on the misspelt word they are then filtered into a stack of the original word
    // and the three closest guesses
    while (filteredGuessList.size() != 4)
    {
        string word = guessList[i];
        if ((word != "") && (word[0] == str[0]))
        {
            filteredGuessList.push(guessList[i]);
        }
        if ((i > 6) && (word != ""))
        {
            filteredGuessList.push(guessList[i]);
        }

        i++;
    }

    return filteredGuessList;
}

int main()
{
    // first the user enters the name of the file they want to spell check
    string fname;
    cout << "please enter the name of the file you want to correct (enter without .txt): ";
    cin >> fname;
    // the dict file then is transformed into a hash table
    unordered_map<int, string> dict;
    int i = 0;
    vector<string> dict_list = tokenize("dict.txt");
    for (const string &token : dict_list)
    {
        dict[i] = token;
        i++;
    }
    // the need to be corrected file is then put into a queue
    vector<string> file_list = tokenize(fname + ".txt");
    queue<string> uncheckedfile;
    for (const string &token : file_list)
    {
        uncheckedfile.push(token);
    }
    // this is the first stack where all the words in the queue get checked and then are pushed into a stack
    stack<stack<string>> first_stack;
    while (!uncheckedfile.empty())
    {
        string word = (uncheckedfile.front());
        uncheckedfile.pop();
        first_stack.push(misspellGuesses(dict, word));
    }
    // this is the checking algorithm where the words that are correct get pushed into the final stack directly
    // and the ones that are wrong are displayed to the user with the optional 3 guesses or to just keep the original word
    stack<string> final_stack;
    while (!first_stack.empty())
    {
        stack<string> wordcheck = first_stack.top();
        first_stack.pop();
        if (wordcheck.size() == 1)
        {
            final_stack.push(wordcheck.top());
            wordcheck.pop();
        }
        else if (wordcheck.size() == 4)
        {
            string thirdguess = wordcheck.top();
            wordcheck.pop();
            string secondguess = wordcheck.top();
            wordcheck.pop();
            string firstguess = wordcheck.top();
            wordcheck.pop();
            string originalword = wordcheck.top();
            wordcheck.pop();
            int choice;
            cout << "it seems you have misspelt this word: " << originalword << endl;
            cout << "please select the word you meant: " << endl
                 << "1. " << firstguess << endl
                 << "2. " << secondguess << endl
                 << "3. " << thirdguess << endl
                 << "4. keep the original word: " << originalword << endl;
            cin >> choice;
            choice = choice - 1;
            string guesslist[4] = {firstguess, secondguess, thirdguess, originalword};
            final_stack.push(guesslist[choice]);
        }
    }
    // this is the final step of the program where all the words in the final stack are written into a file
    // with the suffix "_correct" and are correctly capintalized and lined
    int finalsize = final_stack.size();
    ofstream resultfile(fname + "_correct.txt");
    bool makeuppercase = true;
    while (!(final_stack.empty()))
    {
        string tempword = final_stack.top();
        if (tempword == "i")
        {
            tempword = "I";
        }
        if (makeuppercase)
        {
            tempword[0] = toupper(tempword[0]);
        }
        if (tempword[tempword.length() - 1] == '.')
        {
            makeuppercase = true;
            resultfile << tempword << endl;
            final_stack.pop();
            continue;
        }
        makeuppercase = false;
        resultfile << tempword << " ";
        final_stack.pop();
    }

    return 0;
}
