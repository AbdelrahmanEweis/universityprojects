# from automata.fa.dfa import DFA

# dfa = DFA(
#     states={'Ss', 'Sa', 'St', 'reject'},
#     input_symbols={'a', 'b', 'c'},
#     transitions={
#         'Ss': {'a': 'Ss', 'b': 'Sa', 'c' : 'reject'},
#         'Sa': {'a': 'reject', 'b': 'Sa', 'c': 'St'},
#         'St': {'a': 'Ss', 'b': 'Sa', 'c': 'St'},
#         'reject': {'a' : 'reject', 'b': 'reject', 'c': 'reject' }
#     },
#     initial_state='Ss',
#     final_states={'Ss'}
# )
# instring = input("Please enter your desired test input: ")
# steps = dfa.read_input_stepwise(instring)
# print('\nSteps:')
# s = ""
# for i in steps:
#     s+= str(i) + "-> "

# if dfa.accepts_input(instring):
#     s+='Accepted'
# else:
#     s+='Rejected'
# print(s,'\n')

from automata.fa.nfa import NFA

pam_nfa = NFA(
    states={'Ss', 'Sa', 'St'},
    input_symbols={'a', 'b', 'c'},
    transitions={
        'Ss': {'a': {'Ss'}, 'b': {'Sa'}},
        'Sa': {'b': {'Sa'}, 'c': {'St'}},
        'St': {'a': {'Ss'}, 'b': {'Sa'}, 'c': {'St'}},
    },
    initial_state='Ss',
    final_states={'Ss'}
)
def countrepeats(instring):
    count = instring.count("bca")
    return count


def test_nfa(instring):
    current_states = {pam_nfa.initial_state}
    print('\nSteps:')
    s = ""
    for symbol in instring:
        s += f"Current states: {current_states}, Input: {symbol} -> "
        next_states = set()
        for state in current_states:
            next_states |= pam_nfa.transitions[state].get(symbol, set())
        current_states = next_states
        s += f"Next states: {current_states}\n"

        if not current_states: 
            s += 'Rejected'
            print(s)
            return

    if current_states & pam_nfa.final_states:
        s += 'Accepted'
    else:
        s += 'Rejected'
    print(s)
    if "Accepted" in s:
        print("Number of repeated head movements:", countrepeats(instring))
test_nfa("abcabca")
test_nfa("abcaaabcabbca")
test_nfa("bca")
test_nfa("bcb")
test_nfa("abbcbccc")
test_nfa("abbbbbb")
