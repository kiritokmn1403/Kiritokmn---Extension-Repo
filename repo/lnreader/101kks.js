var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var e_1, _b;
var Rr = Object.create;
var Pt = Object.defineProperty, jr = Object.defineProperties, zr = Object.getOwnPropertyDescriptor, Hr = Object.getOwnPropertyDescriptors, Gr = Object.getOwnPropertyNames, Cu = Object.getOwnPropertySymbols, $r = Object.getPrototypeOf, Iu = Object.prototype.hasOwnProperty, Jr = Object.prototype.propertyIsEnumerable;
var Du = function (e, t, u) { return t in e ? Pt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u; }, ut = function (e, t) {
    var e_2, _b;
    for (var u in t || (t = {}))
        Iu.call(t, u) && Du(e, u, t[u]);
    if (Cu)
        try {
            for (var _c = __values(Cu(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                Jr.call(t, u) && Du(e, u, t[u]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return e;
}, gt = function (e, t) { return jr(e, Hr(t)); };
var Wr = function (e, t) { return function () { return (t || e((t = { exports: {} }).exports, t), t.exports); }; }, De = function (e, t) { for (var u in t)
    Pt(e, u, { get: t[u], enumerable: !0 }); }, _u = function (e, t, u, n) {
    var e_3, _b;
    if (t && typeof t == "object" || typeof t == "function") {
        var _loop_1 = function (i) {
            !Iu.call(e, i) && i !== u && Pt(e, i, { get: function () { return t[i]; }, enumerable: !(n = zr(t, i)) || n.enumerable });
        };
        try {
            for (var _c = __values(Gr(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var i = _d.value;
                _loop_1(i);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    return e;
};
var mt = function (e, t, u) { return (u = e != null ? Rr($r(e)) : {}, _u(t || !e || !e.__esModule ? Pt(u, "default", { value: e, enumerable: !0 }) : u, e)); }, Xr = function (e) { return _u(Pt({}, "__esModule", { value: !0 }), e); };
var bt = Wr(function (Ki, sr) { sr.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var yn = {};
De(yn, { default: function () { return wn; } });
module.exports = Xr(yn);
var Qt = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var Yt = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var Ie, Kr = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), At = (Ie = String.fromCodePoint) !== null && Ie !== void 0 ? Ie : function (e) { var t = ""; return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t; };
function _e(e) { var t; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Kr.get(e)) !== null && t !== void 0 ? t : e; }
var z;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })(z || (z = {}));
var Zr = 32, lt;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(lt || (lt = {}));
function Le(e) { return e >= z.ZERO && e <= z.NINE; }
function Qr(e) { return e >= z.UPPER_A && e <= z.UPPER_F || e >= z.LOWER_A && e <= z.LOWER_F; }
function Yr(e) { return e >= z.UPPER_A && e <= z.UPPER_Z || e >= z.LOWER_A && e <= z.LOWER_Z || Le(e); }
function ta(e) { return e === z.EQUALS || Yr(e); }
var j;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(j || (j = {}));
var Q;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(Q || (Q = {}));
var kt = (function () {
    function kt(t, u, n) {
        this.decodeTree = t, this.emitCodePoint = u, this.errors = n, this.state = j.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Q.Strict;
    }
    kt.prototype.startEntity = function (t) { this.decodeMode = t, this.state = j.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    kt.prototype.write = function (t, u) { switch (this.state) {
        case j.EntityStart: return t.charCodeAt(u) === z.NUM ? (this.state = j.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = j.NamedEntity, this.stateNamedEntity(t, u));
        case j.NumericStart: return this.stateNumericStart(t, u);
        case j.NumericDecimal: return this.stateNumericDecimal(t, u);
        case j.NumericHex: return this.stateNumericHex(t, u);
        case j.NamedEntity: return this.stateNamedEntity(t, u);
    } };
    kt.prototype.stateNumericStart = function (t, u) { return u >= t.length ? -1 : (t.charCodeAt(u) | Zr) === z.LOWER_X ? (this.state = j.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = j.NumericDecimal, this.stateNumericDecimal(t, u)); };
    kt.prototype.addToNumericResult = function (t, u, n, i) { if (u !== n) {
        var s = n - u;
        this.result = this.result * Math.pow(i, s) + parseInt(t.substr(u, s), i), this.consumed += s;
    } };
    kt.prototype.stateNumericHex = function (t, u) { var n = u; for (; u < t.length;) {
        var i = t.charCodeAt(u);
        if (Le(i) || Qr(i))
            u += 1;
        else
            return this.addToNumericResult(t, n, u, 16), this.emitNumericEntity(i, 3);
    } return this.addToNumericResult(t, n, u, 16), -1; };
    kt.prototype.stateNumericDecimal = function (t, u) { var n = u; for (; u < t.length;) {
        var i = t.charCodeAt(u);
        if (Le(i))
            u += 1;
        else
            return this.addToNumericResult(t, n, u, 10), this.emitNumericEntity(i, 2);
    } return this.addToNumericResult(t, n, u, 10), -1; };
    kt.prototype.emitNumericEntity = function (t, u) { var n; if (this.consumed <= u)
        return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (t === z.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === Q.Strict)
        return 0; return this.emitCodePoint(_e(this.result), this.consumed), this.errors && (t !== z.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    kt.prototype.stateNamedEntity = function (t, u) { var n = this.decodeTree, i = n[this.treeIndex], s = (i & lt.VALUE_LENGTH) >> 14; for (; u < t.length; u++, this.excess++) {
        var h = t.charCodeAt(u);
        if (this.treeIndex = ea(n, i, this.treeIndex + Math.max(1, s), h), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === Q.Attribute && (s === 0 || ta(h)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (i = n[this.treeIndex], s = (i & lt.VALUE_LENGTH) >> 14, s !== 0) {
            if (h === z.SEMI)
                return this.emitNamedEntityData(this.treeIndex, s, this.consumed + this.excess);
            this.decodeMode !== Q.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    kt.prototype.emitNotTerminatedNamedEntity = function () { var t; var _b = this, u = _b.result, n = _b.decodeTree, i = (n[u] & lt.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(u, i, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed; };
    kt.prototype.emitNamedEntityData = function (t, u, n) { var i = this.decodeTree; return this.emitCodePoint(u === 1 ? i[t] & ~lt.VALUE_LENGTH : i[t + 1], n), u === 3 && this.emitCodePoint(i[t + 2], n), n; };
    kt.prototype.end = function () { var t; switch (this.state) {
        case j.NamedEntity: return this.result !== 0 && (this.decodeMode !== Q.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case j.NumericDecimal: return this.emitNumericEntity(0, 2);
        case j.NumericHex: return this.emitNumericEntity(0, 3);
        case j.NumericStart: return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case j.EntityStart: return 0;
    } };
    return kt;
}());
function Lu(e) { var t = "", u = new kt(e, function (n) { return t += At(n); }); return function (i, s) { var h = 0, g = 0; for (; (g = i.indexOf("&", g)) >= 0;) {
    t += i.slice(h, g), u.startEntity(s);
    var S = u.write(i, g + 1);
    if (S < 0) {
        h = g + u.end();
        break;
    }
    h = g + S, g = S === 0 ? h + 1 : h;
} var w = t + i.slice(h); return t = "", w; }; }
function ea(e, t, u, n) { var i = (t & lt.BRANCH_LENGTH) >> 7, s = t & lt.JUMP_TABLE; if (i === 0)
    return s !== 0 && n === s ? u : -1; if (s) {
    var w = n - s;
    return w < 0 || w >= i ? -1 : e[u + w] - 1;
} var h = u, g = h + i - 1; for (; h <= g;) {
    var w = h + g >>> 1, S = e[w];
    if (S < n)
        h = w + 1;
    else if (S > n)
        g = w - 1;
    else
        return e[w + i];
} return -1; }
var Dn = Lu(Qt), In = Lu(Yt);
var D;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(D || (D = {}));
var E;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(E || (E = {}));
function st(e) { return e === D.Space || e === D.NewLine || e === D.Tab || e === D.FormFeed || e === D.CarriageReturn; }
function te(e) { return e === D.Slash || e === D.Gt || st(e); }
function ua(e) { return e >= D.LowerA && e <= D.LowerZ || e >= D.UpperA && e <= D.UpperZ; }
var Y;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(Y || (Y = {}));
var $ = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Et = (function () {
    function Et(_b, n) {
        var _c = _b.xmlMode, t = _c === void 0 ? !1 : _c, _d = _b.decodeEntities, u = _d === void 0 ? !0 : _d;
        var _this = this;
        this.cbs = n, this.state = E.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = E.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = t, this.decodeEntities = u, this.entityDecoder = new kt(t ? Yt : Qt, function (i, s) { return _this.emitCodePoint(i, s); });
    }
    Et.prototype.reset = function () { this.state = E.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = E.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Et.prototype.write = function (t) { this.offset += this.buffer.length, this.buffer = t, this.parse(); };
    Et.prototype.end = function () { this.running && this.finish(); };
    Et.prototype.pause = function () { this.running = !1; };
    Et.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Et.prototype.stateText = function (t) { t === D.Lt || !this.decodeEntities && this.fastForwardTo(D.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = E.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && t === D.Amp && this.startEntity(); };
    Et.prototype.stateSpecialStartSequence = function (t) { var u = this.sequenceIndex === this.currentSequence.length; if (!(u ? te(t) : (t | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!u) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = E.InTagName, this.stateInTagName(t); };
    Et.prototype.stateInSpecialTag = function (t) { if (this.sequenceIndex === this.currentSequence.length) {
        if (t === D.Gt || st(t)) {
            var u = this.index - this.currentSequence.length;
            if (this.sectionStart < u) {
                var n = this.index;
                this.index = u, this.cbs.ontext(this.sectionStart, u), this.index = n;
            }
            this.isSpecial = !1, this.sectionStart = u + 2, this.stateInClosingTagName(t);
            return;
        }
        this.sequenceIndex = 0;
    } (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === $.TitleEnd ? this.decodeEntities && t === D.Amp && this.startEntity() : this.fastForwardTo(D.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === D.Lt); };
    Et.prototype.stateCDATASequence = function (t) { t === $.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === $.Cdata.length && (this.state = E.InCommentLike, this.currentSequence = $.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = E.InDeclaration, this.stateInDeclaration(t)); };
    Et.prototype.fastForwardTo = function (t) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === t)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Et.prototype.stateInCommentLike = function (t) { t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === $.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = E.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Et.prototype.isTagStartChar = function (t) { return this.xmlMode ? !te(t) : ua(t); };
    Et.prototype.startSpecial = function (t, u) { this.isSpecial = !0, this.currentSequence = t, this.sequenceIndex = u, this.state = E.SpecialStartSequence; };
    Et.prototype.stateBeforeTagName = function (t) { if (t === D.ExclamationMark)
        this.state = E.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (t === D.Questionmark)
        this.state = E.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(t)) {
        var u = t | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = E.InTagName : u === $.ScriptEnd[2] ? this.state = E.BeforeSpecialS : u === $.TitleEnd[2] ? this.state = E.BeforeSpecialT : this.state = E.InTagName;
    }
    else
        t === D.Slash ? this.state = E.BeforeClosingTagName : (this.state = E.Text, this.stateText(t)); };
    Et.prototype.stateInTagName = function (t) { te(t) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    Et.prototype.stateBeforeClosingTagName = function (t) { st(t) || (t === D.Gt ? this.state = E.Text : (this.state = this.isTagStartChar(t) ? E.InClosingTagName : E.InSpecialComment, this.sectionStart = this.index)); };
    Et.prototype.stateInClosingTagName = function (t) { (t === D.Gt || st(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = E.AfterClosingTagName, this.stateAfterClosingTagName(t)); };
    Et.prototype.stateAfterClosingTagName = function (t) { (t === D.Gt || this.fastForwardTo(D.Gt)) && (this.state = E.Text, this.sectionStart = this.index + 1); };
    Et.prototype.stateBeforeAttributeName = function (t) { t === D.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = E.InSpecialTag, this.sequenceIndex = 0) : this.state = E.Text, this.sectionStart = this.index + 1) : t === D.Slash ? this.state = E.InSelfClosingTag : st(t) || (this.state = E.InAttributeName, this.sectionStart = this.index); };
    Et.prototype.stateInSelfClosingTag = function (t) { t === D.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = E.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : st(t) || (this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    Et.prototype.stateInAttributeName = function (t) { (t === D.Eq || te(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = E.AfterAttributeName, this.stateAfterAttributeName(t)); };
    Et.prototype.stateAfterAttributeName = function (t) { t === D.Eq ? this.state = E.BeforeAttributeValue : t === D.Slash || t === D.Gt ? (this.cbs.onattribend(Y.NoValue, this.sectionStart), this.sectionStart = -1, this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(t)) : st(t) || (this.cbs.onattribend(Y.NoValue, this.sectionStart), this.state = E.InAttributeName, this.sectionStart = this.index); };
    Et.prototype.stateBeforeAttributeValue = function (t) { t === D.DoubleQuote ? (this.state = E.InAttributeValueDq, this.sectionStart = this.index + 1) : t === D.SingleQuote ? (this.state = E.InAttributeValueSq, this.sectionStart = this.index + 1) : st(t) || (this.sectionStart = this.index, this.state = E.InAttributeValueNq, this.stateInAttributeValueNoQuotes(t)); };
    Et.prototype.handleInAttributeValue = function (t, u) { t === u || !this.decodeEntities && this.fastForwardTo(u) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(u === D.DoubleQuote ? Y.Double : Y.Single, this.index + 1), this.state = E.BeforeAttributeName) : this.decodeEntities && t === D.Amp && this.startEntity(); };
    Et.prototype.stateInAttributeValueDoubleQuotes = function (t) { this.handleInAttributeValue(t, D.DoubleQuote); };
    Et.prototype.stateInAttributeValueSingleQuotes = function (t) { this.handleInAttributeValue(t, D.SingleQuote); };
    Et.prototype.stateInAttributeValueNoQuotes = function (t) { st(t) || t === D.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(Y.Unquoted, this.index), this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(t)) : this.decodeEntities && t === D.Amp && this.startEntity(); };
    Et.prototype.stateBeforeDeclaration = function (t) { t === D.OpeningSquareBracket ? (this.state = E.CDATASequence, this.sequenceIndex = 0) : this.state = t === D.Dash ? E.BeforeComment : E.InDeclaration; };
    Et.prototype.stateInDeclaration = function (t) { (t === D.Gt || this.fastForwardTo(D.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = E.Text, this.sectionStart = this.index + 1); };
    Et.prototype.stateInProcessingInstruction = function (t) { (t === D.Gt || this.fastForwardTo(D.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = E.Text, this.sectionStart = this.index + 1); };
    Et.prototype.stateBeforeComment = function (t) { t === D.Dash ? (this.state = E.InCommentLike, this.currentSequence = $.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = E.InDeclaration; };
    Et.prototype.stateInSpecialComment = function (t) { (t === D.Gt || this.fastForwardTo(D.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = E.Text, this.sectionStart = this.index + 1); };
    Et.prototype.stateBeforeSpecialS = function (t) { var u = t | 32; u === $.ScriptEnd[3] ? this.startSpecial($.ScriptEnd, 4) : u === $.StyleEnd[3] ? this.startSpecial($.StyleEnd, 4) : (this.state = E.InTagName, this.stateInTagName(t)); };
    Et.prototype.stateBeforeSpecialT = function (t) { var u = t | 32; u === $.TitleEnd[3] ? this.startSpecial($.TitleEnd, 4) : u === $.TextareaEnd[3] ? this.startSpecial($.TextareaEnd, 4) : (this.state = E.InTagName, this.stateInTagName(t)); };
    Et.prototype.startEntity = function () { this.baseState = this.state, this.state = E.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? Q.Strict : this.baseState === E.Text || this.baseState === E.InSpecialTag ? Q.Legacy : Q.Attribute); };
    Et.prototype.stateInEntity = function () { var t = this.entityDecoder.write(this.buffer, this.index - this.offset); t >= 0 ? (this.state = this.baseState, t === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Et.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === E.Text || this.state === E.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === E.InAttributeValueDq || this.state === E.InAttributeValueSq || this.state === E.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Et.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Et.prototype.parse = function () { for (; this.shouldContinue();) {
        var t = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case E.Text: {
                this.stateText(t);
                break;
            }
            case E.SpecialStartSequence: {
                this.stateSpecialStartSequence(t);
                break;
            }
            case E.InSpecialTag: {
                this.stateInSpecialTag(t);
                break;
            }
            case E.CDATASequence: {
                this.stateCDATASequence(t);
                break;
            }
            case E.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(t);
                break;
            }
            case E.InAttributeName: {
                this.stateInAttributeName(t);
                break;
            }
            case E.InCommentLike: {
                this.stateInCommentLike(t);
                break;
            }
            case E.InSpecialComment: {
                this.stateInSpecialComment(t);
                break;
            }
            case E.BeforeAttributeName: {
                this.stateBeforeAttributeName(t);
                break;
            }
            case E.InTagName: {
                this.stateInTagName(t);
                break;
            }
            case E.InClosingTagName: {
                this.stateInClosingTagName(t);
                break;
            }
            case E.BeforeTagName: {
                this.stateBeforeTagName(t);
                break;
            }
            case E.AfterAttributeName: {
                this.stateAfterAttributeName(t);
                break;
            }
            case E.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(t);
                break;
            }
            case E.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(t);
                break;
            }
            case E.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(t);
                break;
            }
            case E.AfterClosingTagName: {
                this.stateAfterClosingTagName(t);
                break;
            }
            case E.BeforeSpecialS: {
                this.stateBeforeSpecialS(t);
                break;
            }
            case E.BeforeSpecialT: {
                this.stateBeforeSpecialT(t);
                break;
            }
            case E.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(t);
                break;
            }
            case E.InSelfClosingTag: {
                this.stateInSelfClosingTag(t);
                break;
            }
            case E.InDeclaration: {
                this.stateInDeclaration(t);
                break;
            }
            case E.BeforeDeclaration: {
                this.stateBeforeDeclaration(t);
                break;
            }
            case E.BeforeComment: {
                this.stateBeforeComment(t);
                break;
            }
            case E.InProcessingInstruction: {
                this.stateInProcessingInstruction(t);
                break;
            }
            case E.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Et.prototype.finish = function () { this.state === E.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Et.prototype.handleTrailingData = function () { var t = this.buffer.length + this.offset; this.sectionStart >= t || (this.state === E.InCommentLike ? this.currentSequence === $.CdataEnd ? this.cbs.oncdata(this.sectionStart, t, 0) : this.cbs.oncomment(this.sectionStart, t, 0) : this.state === E.InTagName || this.state === E.BeforeAttributeName || this.state === E.BeforeAttributeValue || this.state === E.AfterAttributeName || this.state === E.InAttributeName || this.state === E.InAttributeValueSq || this.state === E.InAttributeValueDq || this.state === E.InAttributeValueNq || this.state === E.InClosingTagName || this.cbs.ontext(this.sectionStart, t)); };
    Et.prototype.emitCodePoint = function (t, u) { this.baseState !== E.Text && this.baseState !== E.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.onattribentity(t)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.ontextentity(t, this.sectionStart)); };
    return Et;
}());
var Tt = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), B = new Set(["p"]), Ou = new Set(["thead", "tbody"]), Uu = new Set(["dd", "dt"]), Pu = new Set(["rt", "rp"]), ra = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", B], ["h1", B], ["h2", B], ["h3", B], ["h4", B], ["h5", B], ["h6", B], ["select", Tt], ["input", Tt], ["output", Tt], ["button", Tt], ["datalist", Tt], ["textarea", Tt], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Uu], ["dt", Uu], ["address", B], ["article", B], ["aside", B], ["blockquote", B], ["details", B], ["div", B], ["dl", B], ["fieldset", B], ["figcaption", B], ["figure", B], ["footer", B], ["form", B], ["header", B], ["hr", B], ["main", B], ["nav", B], ["ol", B], ["pre", B], ["section", B], ["table", B], ["ul", B], ["rt", Pu], ["rp", Pu], ["tbody", Ou], ["tfoot", Ou]]), aa = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Mu = new Set(["math", "svg"]), Bu = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), na = /\s|\//, Mt = (function () {
    function Mt(t, u) {
        if (u === void 0) { u = {}; }
        var n, i, s, h, g, w;
        this.options = u, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = t != null ? t : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (n = u.lowerCaseTags) !== null && n !== void 0 ? n : this.htmlMode, this.lowerCaseAttributeNames = (i = u.lowerCaseAttributeNames) !== null && i !== void 0 ? i : this.htmlMode, this.recognizeSelfClosing = (s = u.recognizeSelfClosing) !== null && s !== void 0 ? s : !this.htmlMode, this.tokenizer = new ((h = u.Tokenizer) !== null && h !== void 0 ? h : Et)(this.options, this), this.foreignContext = [!this.htmlMode], (w = (g = this.cbs).onparserinit) === null || w === void 0 || w.call(g, this);
    }
    Mt.prototype.ontext = function (t, u) { var n, i; var s = this.getSlice(t, u); this.endIndex = u - 1, (i = (n = this.cbs).ontext) === null || i === void 0 || i.call(n, s), this.startIndex = u; };
    Mt.prototype.ontextentity = function (t, u) { var n, i; this.endIndex = u - 1, (i = (n = this.cbs).ontext) === null || i === void 0 || i.call(n, At(t)), this.startIndex = u; };
    Mt.prototype.isVoidElement = function (t) { return this.htmlMode && aa.has(t); };
    Mt.prototype.onopentagname = function (t, u) { this.endIndex = u; var n = this.getSlice(t, u); this.lowerCaseTagNames && (n = n.toLowerCase()), this.emitOpenTag(n); };
    Mt.prototype.emitOpenTag = function (t) { var u, n, i, s; this.openTagStart = this.startIndex, this.tagname = t; var h = this.htmlMode && ra.get(t); if (h)
        for (; this.stack.length > 0 && h.has(this.stack[0]);) {
            var g = this.stack.shift();
            (n = (u = this.cbs).onclosetag) === null || n === void 0 || n.call(u, g, !0);
        } this.isVoidElement(t) || (this.stack.unshift(t), this.htmlMode && (Mu.has(t) ? this.foreignContext.unshift(!0) : Bu.has(t) && this.foreignContext.unshift(!1))), (s = (i = this.cbs).onopentagname) === null || s === void 0 || s.call(i, t), this.cbs.onopentag && (this.attribs = {}); };
    Mt.prototype.endOpenTag = function (t) { var u, n; this.startIndex = this.openTagStart, this.attribs && ((n = (u = this.cbs).onopentag) === null || n === void 0 || n.call(u, this.tagname, this.attribs, t), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Mt.prototype.onopentagend = function (t) { this.endIndex = t, this.endOpenTag(!1), this.startIndex = t + 1; };
    Mt.prototype.onclosetag = function (t, u) { var n, i, s, h, g, w, S, T; this.endIndex = u; var I = this.getSlice(t, u); if (this.lowerCaseTagNames && (I = I.toLowerCase()), this.htmlMode && (Mu.has(I) || Bu.has(I)) && this.foreignContext.shift(), this.isVoidElement(I))
        this.htmlMode && I === "br" && ((h = (s = this.cbs).onopentagname) === null || h === void 0 || h.call(s, "br"), (w = (g = this.cbs).onopentag) === null || w === void 0 || w.call(g, "br", {}, !0), (T = (S = this.cbs).onclosetag) === null || T === void 0 || T.call(S, "br", !1));
    else {
        var N = this.stack.indexOf(I);
        if (N !== -1)
            for (var q = 0; q <= N; q++) {
                var _ = this.stack.shift();
                (i = (n = this.cbs).onclosetag) === null || i === void 0 || i.call(n, _, q !== N);
            }
        else
            this.htmlMode && I === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = u + 1; };
    Mt.prototype.onselfclosingtag = function (t) { this.endIndex = t, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = t + 1) : this.onopentagend(t); };
    Mt.prototype.closeCurrentTag = function (t) { var u, n; var i = this.tagname; this.endOpenTag(t), this.stack[0] === i && ((n = (u = this.cbs).onclosetag) === null || n === void 0 || n.call(u, i, !t), this.stack.shift()); };
    Mt.prototype.onattribname = function (t, u) { this.startIndex = t; var n = this.getSlice(t, u); this.attribname = this.lowerCaseAttributeNames ? n.toLowerCase() : n; };
    Mt.prototype.onattribdata = function (t, u) { this.attribvalue += this.getSlice(t, u); };
    Mt.prototype.onattribentity = function (t) { this.attribvalue += At(t); };
    Mt.prototype.onattribend = function (t, u) { var n, i; this.endIndex = u, (i = (n = this.cbs).onattribute) === null || i === void 0 || i.call(n, this.attribname, this.attribvalue, t === Y.Double ? '"' : t === Y.Single ? "'" : t === Y.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Mt.prototype.getInstructionName = function (t) { var u = t.search(na), n = u < 0 ? t : t.substr(0, u); return this.lowerCaseTagNames && (n = n.toLowerCase()), n; };
    Mt.prototype.ondeclaration = function (t, u) { this.endIndex = u; var n = this.getSlice(t, u); if (this.cbs.onprocessinginstruction) {
        var i = this.getInstructionName(n);
        this.cbs.onprocessinginstruction("!".concat(i), "!".concat(n));
    } this.startIndex = u + 1; };
    Mt.prototype.onprocessinginstruction = function (t, u) { this.endIndex = u; var n = this.getSlice(t, u); if (this.cbs.onprocessinginstruction) {
        var i = this.getInstructionName(n);
        this.cbs.onprocessinginstruction("?".concat(i), "?".concat(n));
    } this.startIndex = u + 1; };
    Mt.prototype.oncomment = function (t, u, n) { var i, s, h, g; this.endIndex = u, (s = (i = this.cbs).oncomment) === null || s === void 0 || s.call(i, this.getSlice(t, u - n)), (g = (h = this.cbs).oncommentend) === null || g === void 0 || g.call(h), this.startIndex = u + 1; };
    Mt.prototype.oncdata = function (t, u, n) { var i, s, h, g, w, S, T, I, N, q; this.endIndex = u; var _ = this.getSlice(t, u - n); !this.htmlMode || this.options.recognizeCDATA ? ((s = (i = this.cbs).oncdatastart) === null || s === void 0 || s.call(i), (g = (h = this.cbs).ontext) === null || g === void 0 || g.call(h, _), (S = (w = this.cbs).oncdataend) === null || S === void 0 || S.call(w)) : ((I = (T = this.cbs).oncomment) === null || I === void 0 || I.call(T, "[CDATA[".concat(_, "]]")), (q = (N = this.cbs).oncommentend) === null || q === void 0 || q.call(N)), this.startIndex = u + 1; };
    Mt.prototype.onend = function () { var t, u; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var n = 0; n < this.stack.length; n++)
            this.cbs.onclosetag(this.stack[n], !0);
    } (u = (t = this.cbs).onend) === null || u === void 0 || u.call(t); };
    Mt.prototype.reset = function () { var t, u, n, i; (u = (t = this.cbs).onreset) === null || u === void 0 || u.call(t), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (i = (n = this.cbs).onparserinit) === null || i === void 0 || i.call(n, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Mt.prototype.parseComplete = function (t) { this.reset(), this.end(t); };
    Mt.prototype.getSlice = function (t, u) { for (; t - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var n = this.buffers[0].slice(t - this.bufferOffset, u - this.bufferOffset); for (; u - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), n += this.buffers[0].slice(0, u - this.bufferOffset); return n; };
    Mt.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Mt.prototype.write = function (t) { var u, n; if (this.ended) {
        (n = (u = this.cbs).onerror) === null || n === void 0 || n.call(u, new Error(".write() after done!"));
        return;
    } this.buffers.push(t), this.tokenizer.running && (this.tokenizer.write(t), this.writeIndex++); };
    Mt.prototype.end = function (t) { var u, n; if (this.ended) {
        (n = (u = this.cbs).onerror) === null || n === void 0 || n.call(u, new Error(".end() after done!"));
        return;
    } t && this.write(t), this.ended = !0, this.tokenizer.end(); };
    Mt.prototype.pause = function () { this.tokenizer.pause(); };
    Mt.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Mt.prototype.parseChunk = function (t) { this.write(t); };
    Mt.prototype.done = function (t) { this.end(t); };
    return Mt;
}());
var ee = {};
De(ee, { CDATA: function () { return je; }, Comment: function () { return Be; }, Directive: function () { return Me; }, Doctype: function () { return ze; }, ElementType: function () { return O; }, Root: function () { return Ue; }, Script: function () { return Fe; }, Style: function () { return Ve; }, Tag: function () { return Re; }, Text: function () { return Pe; }, isTag: function () { return Oe; } });
var O;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })(O || (O = {}));
function Oe(e) { return e.type === O.Tag || e.type === O.Script || e.type === O.Style; }
var Ue = O.Root, Pe = O.Text, Me = O.Directive, Be = O.Comment, Fe = O.Script, Ve = O.Style, Re = O.Tag, je = O.CDATA, ze = O.Doctype;
var ue = (function () {
    function ue() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(ue.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (t) { this.parent = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ue.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (t) { this.prev = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ue.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (t) { this.next = t; },
        enumerable: false,
        configurable: true
    });
    ue.prototype.cloneNode = function (t) {
        if (t === void 0) { t = !1; }
        return Fu(this, t);
    };
    return ue;
}()), Bt = (function (_super) {
    __extends(Bt, _super);
    function Bt(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = t;
        return _this;
    }
    Object.defineProperty(Bt.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (t) { this.data = t; },
        enumerable: false,
        configurable: true
    });
    return Bt;
}(ue)), Nt = (function (_super) {
    __extends(Nt, _super);
    function Nt() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Text;
        return _this;
    }
    Object.defineProperty(Nt.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return Nt;
}(Bt)), Ft = (function (_super) {
    __extends(Ft, _super);
    function Ft() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Comment;
        return _this;
    }
    Object.defineProperty(Ft.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return Ft;
}(Bt)), Vt = (function (_super) {
    __extends(Vt, _super);
    function Vt(t, u) {
        var _this = this;
        _this = _super.call(this, u) || this, _this.name = t, _this.type = O.Directive;
        return _this;
    }
    Object.defineProperty(Vt.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Vt;
}(Bt)), Rt = (function (_super) {
    __extends(Rt, _super);
    function Rt(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = t;
        return _this;
    }
    Object.defineProperty(Rt.prototype, "firstChild", {
        get: function () { var t; return (t = this.children[0]) !== null && t !== void 0 ? t : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rt.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rt.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (t) { this.children = t; },
        enumerable: false,
        configurable: true
    });
    return Rt;
}(ue)), jt = (function (_super) {
    __extends(jt, _super);
    function jt() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.CDATA;
        return _this;
    }
    Object.defineProperty(jt.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return jt;
}(Rt)), qt = (function (_super) {
    __extends(qt, _super);
    function qt() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Root;
        return _this;
    }
    Object.defineProperty(qt.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return qt;
}(Rt)), zt = (function (_super) {
    __extends(zt, _super);
    function zt(t, u, n, i) {
        if (n === void 0) { n = []; }
        if (i === void 0) { i = t === "script" ? O.Script : t === "style" ? O.Style : O.Tag; }
        var _this = this;
        _this = _super.call(this, n) || this, _this.name = t, _this.attribs = u, _this.type = i;
        return _this;
    }
    Object.defineProperty(zt.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(zt.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (t) { this.name = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(zt.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (t) { var u, n; return { name: t, value: _this.attribs[t], namespace: (u = _this["x-attribsNamespace"]) === null || u === void 0 ? void 0 : u[t], prefix: (n = _this["x-attribsPrefix"]) === null || n === void 0 ? void 0 : n[t] }; });
        },
        enumerable: false,
        configurable: true
    });
    return zt;
}(Rt));
function P(e) { return Oe(e); }
function Ct(e) { return e.type === O.CDATA; }
function rt(e) { return e.type === O.Text; }
function Ht(e) { return e.type === O.Comment; }
function ia(e) { return e.type === O.Directive; }
function Ge(e) { return e.type === O.Root; }
function J(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function Fu(e, t) {
    if (t === void 0) { t = !1; }
    var u;
    if (rt(e))
        u = new Nt(e.data);
    else if (Ht(e))
        u = new Ft(e.data);
    else if (P(e)) {
        var n = t ? He(e.children) : [], i_1 = new zt(e.name, ut({}, e.attribs), n);
        n.forEach(function (s) { return s.parent = i_1; }), e.namespace != null && (i_1.namespace = e.namespace), e["x-attribsNamespace"] && (i_1["x-attribsNamespace"] = ut({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (i_1["x-attribsPrefix"] = ut({}, e["x-attribsPrefix"])), u = i_1;
    }
    else if (Ct(e)) {
        var n = t ? He(e.children) : [], i_2 = new jt(n);
        n.forEach(function (s) { return s.parent = i_2; }), u = i_2;
    }
    else if (Ge(e)) {
        var n = t ? He(e.children) : [], i_3 = new qt(n);
        n.forEach(function (s) { return s.parent = i_3; }), e["x-mode"] && (i_3["x-mode"] = e["x-mode"]), u = i_3;
    }
    else if (ia(e)) {
        var n = new Vt(e.name, e.data);
        e["x-name"] != null && (n["x-name"] = e["x-name"], n["x-publicId"] = e["x-publicId"], n["x-systemId"] = e["x-systemId"]), u = n;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return u.startIndex = e.startIndex, u.endIndex = e.endIndex, e.sourceCodeLocation != null && (u.sourceCodeLocation = e.sourceCodeLocation), u;
}
function He(e) { var t = e.map(function (u) { return Fu(u, !0); }); for (var u = 1; u < t.length; u++)
    t[u].prev = t[u - 1], t[u - 1].next = t[u]; return t; }
var Vu = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Dt = (function () {
    function Dt(t, u, n) {
        this.dom = [], this.root = new qt(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (n = u, u = Vu), typeof t == "object" && (u = t, t = void 0), this.callback = t != null ? t : null, this.options = u != null ? u : Vu, this.elementCB = n != null ? n : null;
    }
    Dt.prototype.onparserinit = function (t) { this.parser = t; };
    Dt.prototype.onreset = function () { this.dom = [], this.root = new qt(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Dt.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Dt.prototype.onerror = function (t) { this.handleCallback(t); };
    Dt.prototype.onclosetag = function () { this.lastNode = null; var t = this.tagStack.pop(); this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t); };
    Dt.prototype.onopentag = function (t, u) { var n = this.options.xmlMode ? O.Tag : void 0, i = new zt(t, u, void 0, n); this.addNode(i), this.tagStack.push(i); };
    Dt.prototype.ontext = function (t) { var u = this.lastNode; if (u && u.type === O.Text)
        u.data += t, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
    else {
        var n = new Nt(t);
        this.addNode(n), this.lastNode = n;
    } };
    Dt.prototype.oncomment = function (t) { if (this.lastNode && this.lastNode.type === O.Comment) {
        this.lastNode.data += t;
        return;
    } var u = new Ft(t); this.addNode(u), this.lastNode = u; };
    Dt.prototype.oncommentend = function () { this.lastNode = null; };
    Dt.prototype.oncdatastart = function () { var t = new Nt(""), u = new jt([t]); this.addNode(u), t.parent = u, this.lastNode = t; };
    Dt.prototype.oncdataend = function () { this.lastNode = null; };
    Dt.prototype.onprocessinginstruction = function (t, u) { var n = new Vt(t, u); this.addNode(n); };
    Dt.prototype.handleCallback = function (t) { if (typeof this.callback == "function")
        this.callback(t, this.dom);
    else if (t)
        throw t; };
    Dt.prototype.addNode = function (t) { var u = this.tagStack[this.tagStack.length - 1], n = u.children[u.children.length - 1]; this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), u.children.push(t), n && (t.prev = n, n.next = t), t.parent = u, this.lastNode = null; };
    return Dt;
}());
var at = {};
De(at, { DocumentPosition: function () { return tt; }, append: function () { return Ta; }, appendChild: function () { return Ea; }, compareDocumentPosition: function () { return er; }, existsOne: function () { return Yu; }, filter: function () { return _t; }, find: function () { return oe; }, findAll: function () { return Ca; }, findOne: function () { return fe; }, findOneChild: function () { return qa; }, getAttributeValue: function () { return ya; }, getChildren: function () { return se; }, getElementById: function () { return La; }, getElements: function () { return _a; }, getElementsByClassName: function () { return Oa; }, getElementsByTagName: function () { return xt; }, getElementsByTagType: function () { return Ua; }, getFeed: function () { return ru; }, getInnerHTML: function () { return wa; }, getName: function () { return Aa; }, getOuterHTML: function () { return Zu; }, getParent: function () { return Qu; }, getSiblings: function () { return ce; }, getText: function () { return ie; }, hasAttrib: function () { return Sa; }, hasChildren: function () { return J; }, innerText: function () { return Ze; }, isCDATA: function () { return Ct; }, isComment: function () { return Ht; }, isDocument: function () { return Ge; }, isTag: function () { return P; }, isText: function () { return rt; }, nextElementSibling: function () { return Qe; }, prepend: function () { return tu; }, prependChild: function () { return Na; }, prevElementSibling: function () { return Ye; }, removeElement: function () { return ct; }, removeSubsets: function () { return Pa; }, replaceElement: function () { return ka; }, testElement: function () { return Ia; }, textContent: function () { return dt; }, uniqueSort: function () { return uu; } });
function re(e) { for (var t = 1; t < e.length; t++)
    e[t][0] += e[t - 1][0] + 1; return e; }
var sa = new Map(re([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(re([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(re([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(re([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var $e = /["&'<>$\x80-\uFFFF]/g, Ru = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), ju = String.prototype.codePointAt != null ? function (e, t) { return e.codePointAt(t); } : function (e, t) { return (e.charCodeAt(t) & 64512) === 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t); };
function Gt(e) { var t = "", u = 0, n; for (; (n = $e.exec(e)) !== null;) {
    var i = n.index, s = e.charCodeAt(i), h = Ru.get(s);
    h !== void 0 ? (t += e.substring(u, i) + h, u = i + 1) : (t += "".concat(e.substring(u, i), "&#x").concat(ju(e, i).toString(16), ";"), u = $e.lastIndex += +((s & 64512) === 55296));
} return t + e.substr(u); }
function Je(e, t) { return function (n) { var i, s = 0, h = ""; for (; i = e.exec(n);)
    s !== i.index && (h += n.substring(s, i.index)), h += t.get(i[0].charCodeAt(0)), s = i.index + 1; return h + n.substring(s); }; }
var zu = Je(/[&<>'"]/g, Ru), ae = Je(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), ne = Je(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var Hu;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(Hu || (Hu = {}));
var Gu;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(Gu || (Gu = {}));
var Wu = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), Xu = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var oa = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function fa(e) { return e.replace(/"/g, "&quot;"); }
function la(e, t) { var u; if (!e)
    return; var n = ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) === !1 ? fa : t.xmlMode || t.encodeEntities !== "utf8" ? Gt : ae; return Object.keys(e).map(function (i) { var s, h; var g = (s = e[i]) !== null && s !== void 0 ? s : ""; return t.xmlMode === "foreign" && (i = (h = Xu.get(i)) !== null && h !== void 0 ? h : i), !t.emptyAttrs && !t.xmlMode && g === "" ? i : "".concat(i, "=\"").concat(n(g), "\""); }).join(" "); }
var Ku = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function Ke(e, t) {
    if (t === void 0) { t = {}; }
    var u = "length" in e ? e : [e], n = "";
    for (var i = 0; i < u.length; i++)
        n += da(u[i], t);
    return n;
}
var It = Ke;
function da(e, t) { switch (e.type) {
    case Ue: return Ke(e.children, t);
    case ze:
    case Me: return ga(e);
    case Be: return va(e);
    case je: return xa(e);
    case Fe:
    case Ve:
    case Re: return ba(e, t);
    case Pe: return ma(e, t);
} }
var ha = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), pa = new Set(["svg", "math"]);
function ba(e, t) { var u; t.xmlMode === "foreign" && (e.name = (u = Wu.get(e.name)) !== null && u !== void 0 ? u : e.name, e.parent && ha.has(e.parent.name) && (t = gt(ut({}, t), { xmlMode: !1 }))), !t.xmlMode && pa.has(e.name) && (t = gt(ut({}, t), { xmlMode: "foreign" })); var n = "<".concat(e.name), i = la(e.attribs, t); return i && (n += " ".concat(i)), e.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && Ku.has(e.name)) ? (t.xmlMode || (n += " "), n += "/>") : (n += ">", e.children.length > 0 && (n += Ke(e.children, t)), (t.xmlMode || !Ku.has(e.name)) && (n += "</".concat(e.name, ">"))), n; }
function ga(e) { return "<".concat(e.data, ">"); }
function ma(e, t) { var u; var n = e.data || ""; return ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && oa.has(e.parent.name)) && (n = t.xmlMode || t.encodeEntities !== "utf8" ? Gt(n) : ne(n)), n; }
function xa(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function va(e) { return "<!--".concat(e.data, "-->"); }
function Zu(e, t) { return It(e, t); }
function wa(e, t) { return J(e) ? e.children.map(function (u) { return Zu(u, t); }).join("") : ""; }
function ie(e) {
    return Array.isArray(e) ? e.map(ie).join("") : P(e) ? e.name === "br" ? "\n" : ie(e.children) : Ct(e) ? ie(e.children) : rt(e) ? e.data : "";
}
function dt(e) { return Array.isArray(e) ? e.map(dt).join("") : J(e) && !Ht(e) ? dt(e.children) : rt(e) ? e.data : ""; }
function Ze(e) { return Array.isArray(e) ? e.map(Ze).join("") : J(e) && (e.type === O.Tag || Ct(e)) ? Ze(e.children) : rt(e) ? e.data : ""; }
function se(e) { return J(e) ? e.children : []; }
function Qu(e) { return e.parent || null; }
function ce(e) {
    var _b, _c;
    var t = Qu(e);
    if (t != null)
        return se(t);
    var u = [e], n = e.prev, i = e.next;
    for (; n != null;)
        u.unshift(n), _b = n, n = _b.prev;
    for (; i != null;)
        u.push(i), _c = i, i = _c.next;
    return u;
}
function ya(e, t) { var u; return (u = e.attribs) === null || u === void 0 ? void 0 : u[t]; }
function Sa(e, t) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null; }
function Aa(e) { return e.name; }
function Qe(e) {
    var _b;
    var t = e.next;
    for (; t !== null && !P(t);)
        (_b = t, t = _b.next);
    return t;
}
function Ye(e) {
    var _b;
    var t = e.prev;
    for (; t !== null && !P(t);)
        (_b = t, t = _b.prev);
    return t;
}
function ct(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var t = e.parent.children, u = t.lastIndexOf(e);
    u >= 0 && t.splice(u, 1);
} e.next = null, e.prev = null, e.parent = null; }
function ka(e, t) { var u = t.prev = e.prev; u && (u.next = t); var n = t.next = e.next; n && (n.prev = t); var i = t.parent = e.parent; if (i) {
    var s = i.children;
    s[s.lastIndexOf(e)] = t, e.parent = null;
} }
function Ea(e, t) { if (ct(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
    var u = e.children[e.children.length - 2];
    u.next = t, t.prev = u;
}
else
    t.prev = null; }
function Ta(e, t) { ct(t); var u = e.parent, n = e.next; if (t.next = n, t.prev = e, e.next = t, t.parent = u, n) {
    if (n.prev = t, u) {
        var i = u.children;
        i.splice(i.lastIndexOf(n), 0, t);
    }
}
else
    u && u.children.push(t); }
function Na(e, t) { if (ct(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
    var u = e.children[1];
    u.prev = t, t.next = u;
}
else
    t.next = null; }
function tu(e, t) { ct(t); var u = e.parent; if (u) {
    var n = u.children;
    n.splice(n.indexOf(e), 0, t);
} e.prev && (e.prev.next = t), t.parent = u, t.prev = e.prev, t.next = e, e.prev = t; }
function _t(e, t, u, n) {
    if (u === void 0) { u = !0; }
    if (n === void 0) { n = 1 / 0; }
    return oe(e, Array.isArray(t) ? t : [t], u, n);
}
function oe(e, t, u, n) { var i = [], s = [Array.isArray(t) ? t : [t]], h = [0]; for (;;) {
    if (h[0] >= s[0].length) {
        if (h.length === 1)
            return i;
        s.shift(), h.shift();
        continue;
    }
    var g = s[0][h[0]++];
    if (e(g) && (i.push(g), --n <= 0))
        return i;
    u && J(g) && g.children.length > 0 && (h.unshift(0), s.unshift(g.children));
} }
function qa(e, t) { return t.find(e); }
function fe(e, t, u) {
    if (u === void 0) { u = !0; }
    var n = Array.isArray(t) ? t : [t];
    for (var i = 0; i < n.length; i++) {
        var s = n[i];
        if (P(s) && e(s))
            return s;
        if (u && J(s) && s.children.length > 0) {
            var h = fe(e, s.children, !0);
            if (h)
                return h;
        }
    }
    return null;
}
function Yu(e, t) { return (Array.isArray(t) ? t : [t]).some(function (u) { return P(u) && e(u) || J(u) && Yu(e, u.children); }); }
function Ca(e, t) { var u = [], n = [Array.isArray(t) ? t : [t]], i = [0]; for (;;) {
    if (i[0] >= n[0].length) {
        if (n.length === 1)
            return u;
        n.shift(), i.shift();
        continue;
    }
    var s = n[0][i[0]++];
    P(s) && e(s) && u.push(s), J(s) && s.children.length > 0 && (i.unshift(0), n.unshift(s.children));
} }
var le = { tag_name: function (e) { return typeof e == "function" ? function (t) { return P(t) && e(t.name); } : e === "*" ? P : function (t) { return P(t) && t.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (t) { return e(t.type); } : function (t) { return t.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (t) { return rt(t) && e(t.data); } : function (t) { return rt(t) && t.data === e; }; } };
function eu(e, t) { return typeof t == "function" ? function (u) { return P(u) && t(u.attribs[e]); } : function (u) { return P(u) && u.attribs[e] === t; }; }
function Da(e, t) { return function (u) { return e(u) || t(u); }; }
function tr(e) { var t = Object.keys(e).map(function (u) { var n = e[u]; return Object.prototype.hasOwnProperty.call(le, u) ? le[u](n) : eu(u, n); }); return t.length === 0 ? null : t.reduce(Da); }
function Ia(e, t) { var u = tr(e); return u ? u(t) : !0; }
function _a(e, t, u, n) {
    if (n === void 0) { n = 1 / 0; }
    var i = tr(e);
    return i ? _t(i, t, u, n) : [];
}
function La(e, t, u) {
    if (u === void 0) { u = !0; }
    return Array.isArray(t) || (t = [t]), fe(eu("id", e), t, u);
}
function xt(e, t, u, n) {
    if (u === void 0) { u = !0; }
    if (n === void 0) { n = 1 / 0; }
    return _t(le.tag_name(e), t, u, n);
}
function Oa(e, t, u, n) {
    if (u === void 0) { u = !0; }
    if (n === void 0) { n = 1 / 0; }
    return _t(eu("class", e), t, u, n);
}
function Ua(e, t, u, n) {
    if (u === void 0) { u = !0; }
    if (n === void 0) { n = 1 / 0; }
    return _t(le.tag_type(e), t, u, n);
}
function Pa(e) { var t = e.length; for (; --t >= 0;) {
    var u = e[t];
    if (t > 0 && e.lastIndexOf(u, t - 1) >= 0) {
        e.splice(t, 1);
        continue;
    }
    for (var n = u.parent; n; n = n.parent)
        if (e.includes(n)) {
            e.splice(t, 1);
            break;
        }
} return e; }
var tt;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })(tt || (tt = {}));
function er(e, t) { var u = [], n = []; if (e === t)
    return 0; var i = J(e) ? e : e.parent; for (; i;)
    u.unshift(i), i = i.parent; for (i = J(t) ? t : t.parent; i;)
    n.unshift(i), i = i.parent; var s = Math.min(u.length, n.length), h = 0; for (; h < s && u[h] === n[h];)
    h++; if (h === 0)
    return tt.DISCONNECTED; var g = u[h - 1], w = g.children, S = u[h], T = n[h]; return w.indexOf(S) > w.indexOf(T) ? g === t ? tt.FOLLOWING | tt.CONTAINED_BY : tt.FOLLOWING : g === e ? tt.PRECEDING | tt.CONTAINS : tt.PRECEDING; }
function uu(e) { return e = e.filter(function (t, u, n) { return !n.includes(t, u + 1); }), e.sort(function (t, u) { var n = er(t, u); return n & tt.PRECEDING ? -1 : n & tt.FOLLOWING ? 1 : 0; }), e; }
function ru(e) { var t = de(Ra, e); return t ? t.name === "feed" ? Ma(t) : Ba(t) : null; }
function Ma(e) { var t; var u = e.children, n = { type: "atom", items: xt("entry", u).map(function (h) { var g; var w = h.children, S = { media: ur(w) }; X(S, "id", "id", w), X(S, "title", "title", w); var T = (g = de("link", w)) === null || g === void 0 ? void 0 : g.attribs.href; T && (S.link = T); var I = ht("summary", w) || ht("content", w); I && (S.description = I); var N = ht("updated", w); return N && (S.pubDate = new Date(N)), S; }) }; X(n, "id", "id", u), X(n, "title", "title", u); var i = (t = de("link", u)) === null || t === void 0 ? void 0 : t.attribs.href; i && (n.link = i), X(n, "description", "subtitle", u); var s = ht("updated", u); return s && (n.updated = new Date(s)), X(n, "author", "email", u, !0), n; }
function Ba(e) { var t, u; var n = (u = (t = de("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && u !== void 0 ? u : [], i = { type: e.name.substr(0, 3), id: "", items: xt("item", e.children).map(function (h) { var g = h.children, w = { media: ur(g) }; X(w, "id", "guid", g), X(w, "title", "title", g), X(w, "link", "link", g), X(w, "description", "description", g); var S = ht("pubDate", g) || ht("dc:date", g); return S && (w.pubDate = new Date(S)), w; }) }; X(i, "title", "title", n), X(i, "link", "link", n), X(i, "description", "description", n); var s = ht("lastBuildDate", n); return s && (i.updated = new Date(s)), X(i, "author", "managingEditor", n, !0), i; }
var Fa = ["url", "type", "lang"], Va = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function ur(e) { return xt("media:content", e).map(function (t) {
    var e_4, _b, e_5, _c;
    var u = t.attribs, n = { medium: u.medium, isDefault: !!u.isDefault };
    try {
        for (var Fa_1 = __values(Fa), Fa_1_1 = Fa_1.next(); !Fa_1_1.done; Fa_1_1 = Fa_1.next()) {
            var i = Fa_1_1.value;
            u[i] && (n[i] = u[i]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (Fa_1_1 && !Fa_1_1.done && (_b = Fa_1.return)) _b.call(Fa_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var Va_1 = __values(Va), Va_1_1 = Va_1.next(); !Va_1_1.done; Va_1_1 = Va_1.next()) {
            var i = Va_1_1.value;
            u[i] && (n[i] = parseInt(u[i], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (Va_1_1 && !Va_1_1.done && (_c = Va_1.return)) _c.call(Va_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return u.expression && (n.expression = u.expression), n;
}); }
function de(e, t) { return xt(e, t, !0, 1)[0]; }
function ht(e, t, u) {
    if (u === void 0) { u = !1; }
    return dt(xt(e, t, u, 1)).trim();
}
function X(e, t, u, n, i) {
    if (i === void 0) { i = !1; }
    var s = ht(u, n, i);
    s && (e[t] = s);
}
function Ra(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function rr(e, t) { var u = new Dt(void 0, t); return new Mt(u, t).end(e), u.root; }
var C;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(C || (C = {}));
var V;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })(V || (V = {}));
var ar = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, ja = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, za = new Map([[126, V.Element], [94, V.Start], [36, V.End], [42, V.Any], [33, V.Not], [124, V.Hyphen]]), Ha = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function vt(e) { switch (e.type) {
    case C.Adjacent:
    case C.Child:
    case C.Descendant:
    case C.Parent:
    case C.Sibling:
    case C.ColumnCombinator: return !0;
    default: return !1;
} }
var Ga = new Set(["contains", "icontains"]);
function $a(e, t, u) { var n = parseInt(t, 16) - 65536; return n !== n || u ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320); }
function $t(e) { return e.replace(ja, $a); }
function au(e) { return e === 39 || e === 34; }
function nr(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function pt(e) { var t = [], u = ir(t, "".concat(e), 0); if (u < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(u))); return t; }
function ir(e, t, u) { var n = []; function i(N) { var q = t.slice(u + N).match(ar); if (!q)
    throw new Error("Expected name, found ".concat(t.slice(u))); var _b = __read(q, 1), _ = _b[0]; return u += N + _.length, $t(_); } function s(N) { for (u += N; u < t.length && nr(t.charCodeAt(u));)
    u++; } function h() { u += 1; var N = u, q = 1; for (; q > 0 && u < t.length; u++)
    t.charCodeAt(u) === 40 && !g(u) ? q++ : t.charCodeAt(u) === 41 && !g(u) && q--; if (q)
    throw new Error("Parenthesis not matched"); return $t(t.slice(N, u - 1)); } function g(N) { var q = 0; for (; t.charCodeAt(--N) === 92;)
    q++; return (q & 1) === 1; } function w() { if (n.length > 0 && vt(n[n.length - 1]))
    throw new Error("Did not expect successive traversals."); } function S(N) { if (n.length > 0 && n[n.length - 1].type === C.Descendant) {
    n[n.length - 1].type = N;
    return;
} w(), n.push({ type: N }); } function T(N, q) { n.push({ type: C.Attribute, name: N, action: q, value: i(1), namespace: null, ignoreCase: "quirks" }); } function I() { if (n.length && n[n.length - 1].type === C.Descendant && n.pop(), n.length === 0)
    throw new Error("Empty sub-selector"); e.push(n); } if (s(0), t.length === u)
    return u; t: for (; u < t.length;) {
    var N = t.charCodeAt(u);
    switch (N) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (n.length === 0 || n[0].type !== C.Descendant) && (w(), n.push({ type: C.Descendant })), s(1);
            break;
        }
        case 62: {
            S(C.Child), s(1);
            break;
        }
        case 60: {
            S(C.Parent), s(1);
            break;
        }
        case 126: {
            S(C.Sibling), s(1);
            break;
        }
        case 43: {
            S(C.Adjacent), s(1);
            break;
        }
        case 46: {
            T("class", V.Element);
            break;
        }
        case 35: {
            T("id", V.Equals);
            break;
        }
        case 91: {
            s(1);
            var q = void 0, _ = null;
            t.charCodeAt(u) === 124 ? q = i(1) : t.startsWith("*|", u) ? (_ = "*", q = i(2)) : (q = i(0), t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 61 && (_ = q, q = i(1))), s(0);
            var U = V.Exists, W = za.get(t.charCodeAt(u));
            if (W) {
                if (U = W, t.charCodeAt(u + 1) !== 61)
                    throw new Error("Expected `=`");
                s(2);
            }
            else
                t.charCodeAt(u) === 61 && (U = V.Equals, s(1));
            var Z = "", it = null;
            if (U !== "exists") {
                if (au(t.charCodeAt(u))) {
                    var o = t.charCodeAt(u), d = u + 1;
                    for (; d < t.length && (t.charCodeAt(d) !== o || g(d));)
                        d += 1;
                    if (t.charCodeAt(d) !== o)
                        throw new Error("Attribute value didn't end");
                    Z = $t(t.slice(u + 1, d)), u = d + 1;
                }
                else {
                    var o = u;
                    for (; u < t.length && (!nr(t.charCodeAt(u)) && t.charCodeAt(u) !== 93 || g(u));)
                        u += 1;
                    Z = $t(t.slice(o, u));
                }
                s(0);
                var k = t.charCodeAt(u) | 32;
                k === 115 ? (it = !1, s(1)) : k === 105 && (it = !0, s(1));
            }
            if (t.charCodeAt(u) !== 93)
                throw new Error("Attribute selector didn't terminate");
            u += 1;
            var R = { type: C.Attribute, name: q, action: U, value: Z, namespace: _, ignoreCase: it };
            n.push(R);
            break;
        }
        case 58: {
            if (t.charCodeAt(u + 1) === 58) {
                n.push({ type: C.PseudoElement, name: i(2).toLowerCase(), data: t.charCodeAt(u) === 40 ? h() : null });
                continue;
            }
            var q = i(1).toLowerCase(), _ = null;
            if (t.charCodeAt(u) === 40)
                if (Ha.has(q)) {
                    if (au(t.charCodeAt(u + 1)))
                        throw new Error("Pseudo-selector ".concat(q, " cannot be quoted"));
                    if (_ = [], u = ir(_, t, u + 1), t.charCodeAt(u) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(q, " (").concat(t, ")"));
                    u += 1;
                }
                else {
                    if (_ = h(), Ga.has(q)) {
                        var U = _.charCodeAt(0);
                        U === _.charCodeAt(_.length - 1) && au(U) && (_ = _.slice(1, -1));
                    }
                    _ = $t(_);
                }
            n.push({ type: C.Pseudo, name: q, data: _ });
            break;
        }
        case 44: {
            I(), n = [], s(1);
            break;
        }
        default: {
            if (t.startsWith("/*", u)) {
                var U = t.indexOf("*/", u + 2);
                if (U < 0)
                    throw new Error("Comment was not terminated");
                u = U + 2, n.length === 0 && s(0);
                break;
            }
            var q = null, _ = void 0;
            if (N === 42)
                u += 1, _ = "*";
            else if (N === 124) {
                if (_ = "", t.charCodeAt(u + 1) === 124) {
                    S(C.ColumnCombinator), s(2);
                    break;
                }
            }
            else if (ar.test(t.slice(u)))
                _ = i(0);
            else
                break t;
            t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 124 && (q = _, t.charCodeAt(u + 1) === 42 ? (_ = "*", u += 2) : _ = i(1)), n.push(_ === "*" ? { type: C.Universal, namespace: q } : { type: C.Tag, name: _, namespace: q });
        }
    }
} return I(), u; }
var bu = mt(bt(), 1);
var ot = mt(bt(), 1);
var cr = new Map([[C.Universal, 50], [C.Tag, 30], [C.Attribute, 1], [C.Pseudo, 0]]);
function Jt(e) { return !cr.has(e.type); }
var Ja = new Map([[V.Exists, 10], [V.Equals, 8], [V.Not, 7], [V.Start, 6], [V.End, 6], [V.Any, 5]]);
function nu(e) { var t = e.map(or); for (var u = 1; u < e.length; u++) {
    var n = t[u];
    if (!(n < 0))
        for (var i = u - 1; i >= 0 && n < t[i]; i--) {
            var s = e[i + 1];
            e[i + 1] = e[i], e[i] = s, t[i + 1] = t[i], t[i] = n;
        }
} }
function or(e) { var t, u; var n = (t = cr.get(e.type)) !== null && t !== void 0 ? t : -1; return e.type === C.Attribute ? (n = (u = Ja.get(e.action)) !== null && u !== void 0 ? u : 4, e.action === V.Equals && e.name === "id" && (n = 9), e.ignoreCase && (n >>= 1)) : e.type === C.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? n = 0 : Array.isArray(e.data) ? (n = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (i) { return Math.min.apply(Math, __spreadArray([], __read(i.map(or)), false)); })), false)), n < 0 && (n = 0)) : n = 2 : n = 3), n; }
var Wt = mt(bt(), 1), Wa = /[-[\]{}()*+?.,\\^$|#\s]/g;
function fr(e) { return e.replace(Wa, "\\$&"); }
var Xa = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function wt(e, t) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && Xa.has(e.name); }
var lr = { equals: function (e, t, u) { var n = u.adapter, i = t.name, s = t.value; return wt(t, u) ? (s = s.toLowerCase(), function (h) { var g = n.getAttributeValue(h, i); return g != null && g.length === s.length && g.toLowerCase() === s && e(h); }) : function (h) { return n.getAttributeValue(h, i) === s && e(h); }; }, hyphen: function (e, t, u) { var n = u.adapter, i = t.name, s = t.value, h = s.length; return wt(t, u) ? (s = s.toLowerCase(), function (w) { var S = n.getAttributeValue(w, i); return S != null && (S.length === h || S.charAt(h) === "-") && S.substr(0, h).toLowerCase() === s && e(w); }) : function (w) { var S = n.getAttributeValue(w, i); return S != null && (S.length === h || S.charAt(h) === "-") && S.substr(0, h) === s && e(w); }; }, element: function (e, t, u) { var n = u.adapter, i = t.name, s = t.value; if (/\s/.test(s))
        return Wt.default.falseFunc; var h = new RegExp("(?:^|\\s)".concat(fr(s), "(?:$|\\s)"), wt(t, u) ? "i" : ""); return function (w) { var S = n.getAttributeValue(w, i); return S != null && S.length >= s.length && h.test(S) && e(w); }; }, exists: function (e, _b, _c) {
        var t = _b.name;
        var u = _c.adapter;
        return function (n) { return u.hasAttrib(n, t) && e(n); };
    }, start: function (e, t, u) { var n = u.adapter, i = t.name, s = t.value, h = s.length; return h === 0 ? Wt.default.falseFunc : wt(t, u) ? (s = s.toLowerCase(), function (g) { var w = n.getAttributeValue(g, i); return w != null && w.length >= h && w.substr(0, h).toLowerCase() === s && e(g); }) : function (g) { var w; return !!(!((w = n.getAttributeValue(g, i)) === null || w === void 0) && w.startsWith(s)) && e(g); }; }, end: function (e, t, u) { var n = u.adapter, i = t.name, s = t.value, h = -s.length; return h === 0 ? Wt.default.falseFunc : wt(t, u) ? (s = s.toLowerCase(), function (g) { var w; return ((w = n.getAttributeValue(g, i)) === null || w === void 0 ? void 0 : w.substr(h).toLowerCase()) === s && e(g); }) : function (g) { var w; return !!(!((w = n.getAttributeValue(g, i)) === null || w === void 0) && w.endsWith(s)) && e(g); }; }, any: function (e, t, u) { var n = u.adapter, i = t.name, s = t.value; if (s === "")
        return Wt.default.falseFunc; if (wt(t, u)) {
        var h_1 = new RegExp(fr(s), "i");
        return function (w) { var S = n.getAttributeValue(w, i); return S != null && S.length >= s.length && h_1.test(S) && e(w); };
    } return function (h) { var g; return !!(!((g = n.getAttributeValue(h, i)) === null || g === void 0) && g.includes(s)) && e(h); }; }, not: function (e, t, u) { var n = u.adapter, i = t.name, s = t.value; return s === "" ? function (h) { return !!n.getAttributeValue(h, i) && e(h); } : wt(t, u) ? (s = s.toLowerCase(), function (h) { var g = n.getAttributeValue(h, i); return (g == null || g.length !== s.length || g.toLowerCase() !== s) && e(h); }) : function (h) { return n.getAttributeValue(h, i) !== s && e(h); }; } };
var Ka = new Set([9, 10, 12, 13, 32]), dr = 48, Za = 57;
function hr(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var t = 0, u = 0, n = s(), i = h(); if (t < e.length && e.charAt(t) === "n" && (t++, u = n * (i != null ? i : 1), g(), t < e.length ? (n = s(), g(), i = h()) : n = i = 0), i === null || t < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [u, n * i]; function s() { return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1); } function h() { var w = t, S = 0; for (; t < e.length && e.charCodeAt(t) >= dr && e.charCodeAt(t) <= Za;)
    S = S * 10 + (e.charCodeAt(t) - dr), t++; return t === w ? null : S; } function g() { for (; t < e.length && Ka.has(e.charCodeAt(t));)
    t++; } }
var iu = mt(bt(), 1);
function pr(e) { var t = e[0], u = e[1] - 1; if (u < 0 && t <= 0)
    return iu.default.falseFunc; if (t === -1)
    return function (s) { return s <= u; }; if (t === 0)
    return function (s) { return s === u; }; if (t === 1)
    return u < 0 ? iu.default.trueFunc : function (s) { return s >= u; }; var n = Math.abs(t), i = (u % n + n) % n; return t > 1 ? function (s) { return s >= u && s % n === i; } : function (s) { return s <= u && s % n === i; }; }
function Lt(e) { return pr(hr(e)); }
var K = mt(bt(), 1);
function he(e, t) { return function (u) { var n = t.getParent(u); return n != null && t.isTag(n) && e(u); }; }
var Ot = { contains: function (e, t, _b) {
        var u = _b.adapter;
        return function (i) { return e(i) && u.getText(i).includes(t); };
    }, icontains: function (e, t, _b) {
        var u = _b.adapter;
        var n = t.toLowerCase();
        return function (s) { return e(s) && u.getText(s).toLowerCase().includes(n); };
    }, "nth-child": function (e, t, _b) {
        var u = _b.adapter, n = _b.equals;
        var i = Lt(t);
        return i === K.default.falseFunc ? K.default.falseFunc : i === K.default.trueFunc ? he(e, u) : function (h) { var g = u.getSiblings(h), w = 0; for (var S = 0; S < g.length && !n(h, g[S]); S++)
            u.isTag(g[S]) && w++; return i(w) && e(h); };
    }, "nth-last-child": function (e, t, _b) {
        var u = _b.adapter, n = _b.equals;
        var i = Lt(t);
        return i === K.default.falseFunc ? K.default.falseFunc : i === K.default.trueFunc ? he(e, u) : function (h) { var g = u.getSiblings(h), w = 0; for (var S = g.length - 1; S >= 0 && !n(h, g[S]); S--)
            u.isTag(g[S]) && w++; return i(w) && e(h); };
    }, "nth-of-type": function (e, t, _b) {
        var u = _b.adapter, n = _b.equals;
        var i = Lt(t);
        return i === K.default.falseFunc ? K.default.falseFunc : i === K.default.trueFunc ? he(e, u) : function (h) { var g = u.getSiblings(h), w = 0; for (var S = 0; S < g.length; S++) {
            var T = g[S];
            if (n(h, T))
                break;
            u.isTag(T) && u.getName(T) === u.getName(h) && w++;
        } return i(w) && e(h); };
    }, "nth-last-of-type": function (e, t, _b) {
        var u = _b.adapter, n = _b.equals;
        var i = Lt(t);
        return i === K.default.falseFunc ? K.default.falseFunc : i === K.default.trueFunc ? he(e, u) : function (h) { var g = u.getSiblings(h), w = 0; for (var S = g.length - 1; S >= 0; S--) {
            var T = g[S];
            if (n(h, T))
                break;
            u.isTag(T) && u.getName(T) === u.getName(h) && w++;
        } return i(w) && e(h); };
    }, root: function (e, t, _b) {
        var u = _b.adapter;
        return function (n) { var i = u.getParent(n); return (i == null || !u.isTag(i)) && e(n); };
    }, scope: function (e, t, u, n) { var i = u.equals; return !n || n.length === 0 ? Ot.root(e, t, u) : n.length === 1 ? function (s) { return i(n[0], s) && e(s); } : function (s) { return n.includes(s) && e(s); }; }, hover: su("isHovered"), visited: su("isVisited"), active: su("isActive") };
function su(e) { return function (u, n, _b) {
    var i = _b.adapter;
    var s = i[e];
    return typeof s != "function" ? K.default.falseFunc : function (g) { return s(g) && u(g); };
}; }
var Xt = { empty: function (e, _b) {
        var t = _b.adapter;
        return !t.getChildren(e).some(function (u) { return t.isTag(u) || t.getText(u) !== ""; });
    }, "first-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        if (t.prevElementSibling)
            return t.prevElementSibling(e) == null;
        var n = t.getSiblings(e).find(function (i) { return t.isTag(i); });
        return n != null && u(e, n);
    }, "last-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var n = t.getSiblings(e);
        for (var i = n.length - 1; i >= 0; i--) {
            if (u(e, n[i]))
                return !0;
            if (t.isTag(n[i]))
                break;
        }
        return !1;
    }, "first-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var n = t.getSiblings(e), i = t.getName(e);
        for (var s = 0; s < n.length; s++) {
            var h = n[s];
            if (u(e, h))
                return !0;
            if (t.isTag(h) && t.getName(h) === i)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var n = t.getSiblings(e), i = t.getName(e);
        for (var s = n.length - 1; s >= 0; s--) {
            var h = n[s];
            if (u(e, h))
                return !0;
            if (t.isTag(h) && t.getName(h) === i)
                break;
        }
        return !1;
    }, "only-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var n = t.getName(e);
        return t.getSiblings(e).every(function (i) { return u(e, i) || !t.isTag(i) || t.getName(i) !== n; });
    }, "only-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        return t.getSiblings(e).every(function (n) { return u(e, n) || !t.isTag(n); });
    } };
function cu(e, t, u, n) { if (u === null) {
    if (e.length > n)
        throw new Error("Pseudo-class :".concat(t, " requires an argument"));
}
else if (e.length === n)
    throw new Error("Pseudo-class :".concat(t, " doesn't have any arguments")); }
var pe = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var et = mt(bt(), 1);
var lu = {};
function du(e, t) { return e === et.default.falseFunc ? et.default.falseFunc : function (u) { return t.isTag(u) && e(u); }; }
function hu(e, t) { var u = t.getSiblings(e); if (u.length <= 1)
    return []; var n = u.indexOf(e); return n < 0 || n === u.length - 1 ? [] : u.slice(n + 1).filter(t.isTag); }
function fu(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var ou = function (e, t, u, n, i) { var s = i(t, fu(u), n); return s === et.default.trueFunc ? e : s === et.default.falseFunc ? et.default.falseFunc : function (h) { return s(h) && e(h); }; }, be = { is: ou, matches: ou, where: ou, not: function (e, t, u, n, i) { var s = i(t, fu(u), n); return s === et.default.falseFunc ? e : s === et.default.trueFunc ? et.default.falseFunc : function (h) { return !s(h) && e(h); }; }, has: function (e, t, u, n, i) { var s = u.adapter, h = fu(u); h.relativeSelector = !0; var g = t.some(function (T) { return T.some(Jt); }) ? [lu] : void 0, w = i(t, h, g); if (w === et.default.falseFunc)
        return et.default.falseFunc; var S = du(w, s); if (g && w !== et.default.trueFunc) {
        var _b = w.shouldTestNextSiblings, T_1 = _b === void 0 ? !1 : _b;
        return function (I) { if (!e(I))
            return !1; g[0] = I; var N = s.getChildren(I), q = T_1 ? __spreadArray(__spreadArray([], __read(N), false), __read(hu(I, s)), false) : N; return s.existsOne(S, q); };
    } return function (T) { return e(T) && s.existsOne(S, s.getChildren(T)); }; } };
function br(e, t, u, n, i) { var s; var h = t.name, g = t.data; if (Array.isArray(g)) {
    if (!(h in be))
        throw new Error("Unknown pseudo-class :".concat(h, "(").concat(g, ")"));
    return be[h](e, g, u, n, i);
} var w = (s = u.pseudos) === null || s === void 0 ? void 0 : s[h], S = typeof w == "string" ? w : pe[h]; if (typeof S == "string") {
    if (g != null)
        throw new Error("Pseudo ".concat(h, " doesn't have any arguments"));
    var T = pt(S);
    return be.is(e, T, u, n, i);
} if (typeof w == "function")
    return cu(w, h, g, 1), function (T) { return w(T, g) && e(T); }; if (h in Ot)
    return Ot[h](e, g, u, n); if (h in Xt) {
    var T_2 = Xt[h];
    return cu(T_2, h, g, 2), function (I) { return T_2(I, u, g) && e(I); };
} throw new Error("Unknown pseudo-class :".concat(h)); }
function pu(e, t) { var u = t.getParent(e); return u && t.isTag(u) ? u : null; }
function gr(e, t, u, n, i) { var s = u.adapter, h = u.equals; switch (t.type) {
    case C.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case C.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case C.Attribute: {
        if (t.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!u.xmlMode || u.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), lr[t.action](e, t, u);
    }
    case C.Pseudo: return br(e, t, u, n, i);
    case C.Tag: {
        if (t.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var g_1 = t.name;
        return (!u.xmlMode || u.lowerCaseTags) && (g_1 = g_1.toLowerCase()), function (S) { return s.getName(S) === g_1 && e(S); };
    }
    case C.Descendant: {
        if (u.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (S) { var T = S; for (; T = pu(T, s);)
                if (e(T))
                    return !0; return !1; };
        var g_2 = new WeakSet;
        return function (S) { var T = S; for (; T = pu(T, s);)
            if (!g_2.has(T)) {
                if (s.isTag(T) && e(T))
                    return !0;
                g_2.add(T);
            } return !1; };
    }
    case "_flexibleDescendant": return function (w) { var S = w; do
        if (e(S))
            return !0;
    while (S = pu(S, s)); return !1; };
    case C.Parent: return function (w) { return s.getChildren(w).some(function (S) { return s.isTag(S) && e(S); }); };
    case C.Child: return function (w) { var S = s.getParent(w); return S != null && s.isTag(S) && e(S); };
    case C.Sibling: return function (w) { var S = s.getSiblings(w); for (var T = 0; T < S.length; T++) {
        var I = S[T];
        if (h(w, I))
            break;
        if (s.isTag(I) && e(I))
            return !0;
    } return !1; };
    case C.Adjacent: return s.prevElementSibling ? function (w) { var S = s.prevElementSibling(w); return S != null && e(S); } : function (w) { var S = s.getSiblings(w), T; for (var I = 0; I < S.length; I++) {
        var N = S[I];
        if (h(w, N))
            break;
        s.isTag(N) && (T = N);
    } return !!T && e(T); };
    case C.Universal: {
        if (t.namespace != null && t.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function mr(e, t, u) { var n = ge(e, t, u); return du(n, t.adapter); }
function ge(e, t, u) { var n = typeof e == "string" ? pt(e) : e; return me(n, t, u); }
function xr(e) { return e.type === C.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (t) { return t.some(xr); })); }
var Qa = { type: C.Descendant }, Ya = { type: "_flexibleDescendant" }, tn = { type: C.Pseudo, name: "scope", data: null };
function en(e, _b, u) {
    var e_6, _c;
    var t = _b.adapter;
    var n = !!(u != null && u.every(function (i) { var s = t.isTag(i) && t.getParent(i); return i === lu || s && t.isTag(s); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var i = e_7_1.value;
            if (!(i.length > 0 && Jt(i[0]) && i[0].type !== C.Descendant))
                if (n && !i.some(xr))
                    i.unshift(Qa);
                else
                    continue;
            i.unshift(tn);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (e_7_1 && !e_7_1.done && (_c = e_7.return)) _c.call(e_7);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function me(e, t, u) { var n; e.forEach(nu), u = (n = t.context) !== null && n !== void 0 ? n : u; var i = Array.isArray(u), s = u && (Array.isArray(u) ? u : [u]); if (t.relativeSelector !== !1)
    en(e, t, s);
else if (e.some(function (w) { return w.length > 0 && Jt(w[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var h = !1, g = e.map(function (w) { if (w.length >= 2) {
    var _b = __read(w, 2), S = _b[0], T = _b[1];
    S.type !== C.Pseudo || S.name !== "scope" || (i && T.type === C.Descendant ? w[1] = Ya : (T.type === C.Adjacent || T.type === C.Sibling) && (h = !0));
} return un(w, t, s); }).reduce(rn, ot.default.falseFunc); return g.shouldTestNextSiblings = h, g; }
function un(e, t, u) { var n; return e.reduce(function (i, s) { return i === ot.default.falseFunc ? ot.default.falseFunc : gr(i, s, t, u, me); }, (n = t.rootFunc) !== null && n !== void 0 ? n : ot.default.trueFunc); }
function rn(e, t) { return t === ot.default.falseFunc || e === ot.default.trueFunc ? e : e === ot.default.falseFunc || t === ot.default.trueFunc ? t : function (n) { return e(n) || t(n); }; }
var vr = function (e, t) { return e === t; }, an = { adapter: at, equals: vr };
function wr(e) { var t, u, n, i; var s = e != null ? e : an; return (t = s.adapter) !== null && t !== void 0 || (s.adapter = at), (u = s.equals) !== null && u !== void 0 || (s.equals = (i = (n = s.adapter) === null || n === void 0 ? void 0 : n.equals) !== null && i !== void 0 ? i : vr), s; }
function gu(e) { return function (u, n, i) { var s = wr(n); return e(u, s, i); }; }
var C0 = gu(mr), D0 = gu(ge), xe = gu(me);
function yr(e) { return function (u, n, i) { var s = wr(i); typeof u != "function" && (u = ge(u, s, n)); var h = ve(n, s.adapter, u.shouldTestNextSiblings); return e(u, h, s); }; }
function ve(e, t, u) {
    if (u === void 0) { u = !1; }
    return u && (e = nn(e, t)), Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e);
}
function nn(e, t) { var u = Array.isArray(e) ? e.slice(0) : [e], n = u.length; for (var i = 0; i < n; i++) {
    var s = hu(u[i], t);
    u.push.apply(u, __spreadArray([], __read(s), false));
} return u; }
var I0 = yr(function (e, t, u) { return e === bu.default.falseFunc || !t || t.length === 0 ? [] : u.adapter.findAll(e, t); }), _0 = yr(function (e, t, u) { return e === bu.default.falseFunc || !t || t.length === 0 ? null : u.adapter.findOne(e, t); });
var ye = mt(bt(), 1);
var sn = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Ut(e) { return e.type !== "pseudo" ? !1 : sn.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (t) { return t.some(Ut); }) : !1; }
function Sr(e, t, u) { var n = t != null ? parseInt(t, 10) : NaN; switch (e) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(n) ? n >= 0 ? n + 1 : 1 / 0 : 0;
    case "lt": return isFinite(n) ? n >= 0 ? Math.min(n, u) : 1 / 0 : 0;
    case "gt": return isFinite(n) ? 1 / 0 : 0;
    case "odd": return 2 * u;
    case "even": return 2 * u - 1;
    case "last":
    case "not": return 1 / 0;
} }
function Ar(e) { for (; e.parent;)
    e = e.parent; return e; }
function we(e) {
    var e_8, _b;
    var t = [], u = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var n = e_9_1.value;
            n.some(Ut) ? t.push(n) : u.push(n);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (e_9_1 && !e_9_1.done && (_b = e_9.return)) _b.call(e_9);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return [u, t];
}
var cn = { type: C.Universal, namespace: null }, on = { type: C.Pseudo, name: "scope", data: null };
function vu(e, t, u) {
    if (u === void 0) { u = {}; }
    return fn([e], t, u);
}
function fn(e, t, u) {
    if (u === void 0) { u = {}; }
    if (typeof t == "function")
        return e.some(t);
    var _b = __read(we(pt(t)), 2), n = _b[0], i = _b[1];
    return n.length > 0 && e.some(xe(n, u)) || i.some(function (s) { return kr(s, e, u).length > 0; });
}
function ln(e, t, u, n) { var i = typeof u == "string" ? parseInt(u, 10) : NaN; switch (e) {
    case "first":
    case "lt": return t;
    case "last": return t.length > 0 ? [t[t.length - 1]] : t;
    case "nth":
    case "eq": return isFinite(i) && Math.abs(i) < t.length ? [i < 0 ? t[t.length + i] : t[i]] : [];
    case "gt": return isFinite(i) ? t.slice(i + 1) : [];
    case "even": return t.filter(function (s, h) { return h % 2 === 0; });
    case "odd": return t.filter(function (s, h) { return h % 2 === 1; });
    case "not": {
        var s_1 = new Set(dn(u, t, n));
        return t.filter(function (h) { return !s_1.has(h); });
    }
} }
function dn(e, t, u) { if (t.length === 0)
    return []; var _b = __read(we(e), 2), n = _b[0], i = _b[1], s; if (n.length) {
    var h = xu(t, n, u);
    if (i.length === 0)
        return h;
    h.length && (s = new Set(h));
} for (var h = 0; h < i.length && (s == null ? void 0 : s.size) !== t.length; h++) {
    var g = i[h];
    if ((s ? t.filter(function (T) { return P(T) && !s.has(T); }) : t).length === 0)
        break;
    var S = kr(g, t, u);
    if (S.length)
        if (s)
            S.forEach(function (T) { return s.add(T); });
        else {
            if (h === i.length - 1)
                return S;
            s = new Set(S);
        }
} return typeof s != "undefined" ? s.size === t.length ? t : t.filter(function (h) { return s.has(h); }) : []; }
function kr(e, t, u) { var n; if (e.some(vt)) {
    var i = (n = u.root) !== null && n !== void 0 ? n : Ar(t[0]), s = gt(ut({}, u), { context: t, relativeSelector: !1 });
    return e.push(on), Se(i, e, s, !0, t.length);
} return Se(t, e, u, !1, t.length); }
function wu(e, t, u, n) {
    if (u === void 0) { u = {}; }
    if (n === void 0) { n = 1 / 0; }
    if (typeof e == "function")
        return Er(t, e);
    var _b = __read(we(pt(e)), 2), i = _b[0], s = _b[1], h = s.map(function (g) { return Se(t, g, u, !0, n); });
    return i.length && h.push(mu(t, i, u, n)), h.length === 0 ? [] : h.length === 1 ? h[0] : uu(h.reduce(function (g, w) { return __spreadArray(__spreadArray([], __read(g), false), __read(w), false); }));
}
function Se(e, t, u, n, i) { var s = t.findIndex(Ut), h = t.slice(0, s), g = t[s], w = t.length - 1 === s ? i : 1 / 0, S = Sr(g.name, g.data, w); if (S === 0)
    return []; var I = (h.length === 0 && !Array.isArray(e) ? se(e).filter(P) : h.length === 0 ? (Array.isArray(e) ? e : [e]).filter(P) : n || h.some(vt) ? mu(e, [h], u, S) : xu(e, [h], u)).slice(0, S), N = ln(g.name, I, g.data, u); if (N.length === 0 || t.length === s + 1)
    return N; var q = t.slice(s + 1), _ = q.some(vt); if (_) {
    if (vt(q[0])) {
        var U = q[0].type;
        (U === C.Sibling || U === C.Adjacent) && (N = ve(N, at, !0)), q.unshift(cn);
    }
    u = gt(ut({}, u), { relativeSelector: !1, rootFunc: function (U) { return N.includes(U); } });
}
else
    u.rootFunc && u.rootFunc !== ye.trueFunc && (u = gt(ut({}, u), { rootFunc: ye.trueFunc })); return q.some(Ut) ? Se(N, q, u, !1, i) : _ ? mu(N, [q], u, i) : xu(N, [q], u); }
function mu(e, t, u, n) { var i = xe(t, u, e); return Er(e, i, n); }
function Er(e, t, u) {
    if (u === void 0) { u = 1 / 0; }
    var n = ve(e, at, t.shouldTestNextSiblings);
    return oe(function (i) { return P(i) && t(i); }, n, !0, u);
}
function xu(e, t, u) { var n = (Array.isArray(e) ? e : [e]).filter(P); if (n.length === 0)
    return n; var i = xe(t, u); return i === ye.trueFunc ? n : n.filter(i); }
function Tr(e) { var t = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(e) || []; return { scheme: t[1], auth: t[2], path: t[3] || "", query: t[4], frag: t[5] }; }
function yu(e) { var t = [], u = e.split("/"); for (var n = 0; n < u.length; n++) {
    var i = u[n];
    i === ".." ? (t.length > 1 && t.pop(), n === u.length - 1 && t.push("")) : i === "." ? n === u.length - 1 && t.push("") : t.push(i);
} return t.join("/"); }
function ke(e, t) { t = t == null ? "" : String(t).trim(); var u = Tr(t); if (u.scheme || !e)
    return t; var n = Tr(String(e)); if (!n.scheme)
    return t; var i = n.auth, s, h; if (u.auth !== void 0)
    i = u.auth, s = yu(u.path), h = u.query;
else if (!u.path)
    s = n.path, h = u.query !== void 0 ? u.query : n.query;
else {
    if (u.path.charAt(0) === "/")
        s = yu(u.path);
    else {
        var g = i !== void 0 && !n.path ? "/" : n.path.slice(0, n.path.lastIndexOf("/") + 1);
        s = yu(g + u.path);
    }
    h = u.query;
} return i !== void 0 && s.charAt(0) !== "/" && (s = "/" + s), n.scheme + ":" + (i !== void 0 ? "//" + i : "") + s + (h !== void 0 ? "?" + h : "") + (u.frag !== void 0 ? "#" + u.frag : ""); }
var Ae = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Nr(e) { if (typeof btoa == "function")
    return btoa(e); var t = ""; for (var u = 0; u < e.length; u += 3) {
    var n = e.charCodeAt(u), i = e.charCodeAt(u + 1), s = e.charCodeAt(u + 2), h = n << 16 | (i || 0) << 8 | (s || 0);
    t += Ae[h >> 18 & 63] + Ae[h >> 12 & 63] + (u + 1 < e.length ? Ae[h >> 6 & 63] : "=") + (u + 2 < e.length ? Ae[h & 63] : "=");
} return t; }
var hn = function (e, t, u) { return wu(e, t, u); }, Ir = function (e, t, u) { return wu(e, t, u, 1)[0] || null; }, _r = /[\s ]+/g, qr = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), pn = { containsOwn: function (e, t) { return Au(e).toLowerCase().includes(String(t).toLowerCase()); }, matches: function (e, t) { return Cr(t).test(Su(e)); }, matchesOwn: function (e, t) { return Cr(t).test(Au(e)); }, containsData: function (e, t) { return dt(e).includes(t); }, "contains-ci": function (e, t) { return Su(e).toLowerCase().includes(String(t).toLowerCase()); } };
function Cr(e) { try {
    return new RegExp(e);
}
catch (t) {
    return /$^/;
} }
var Ee = { pseudos: pn, xmlMode: !1, lowerCaseTags: !0 };
function Te(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Su(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var t = "", u = function (n) {
    var e_10, _b;
    try {
        for (var _c = __values(n.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var i = _d.value;
            i.type === "text" ? t += i.data : (i.type === "tag" || i.type === "script" || i.type === "style") && (i.name === "br" ? t += " " : i.type === "tag" && (qr.has(i.name) && (t += " "), u(i), qr.has(i.name) && (t += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return u(e), t.replace(_r, " ").trim(); }
function Au(e) {
    var e_11, _b;
    var t = "";
    try {
        for (var _c = __values(e.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var u = _d.value;
            u.type === "text" && (t += u.data);
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return t.replace(_r, " ").trim();
}
function Lr(e, t) { if (!t)
    return ""; try {
    return ke(e, t);
}
catch (u) {
    return e ? "" : t;
} }
var yt = (function () {
    function e(t, u) {
        this.node = t, this.doc = u;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (t) { return nt.of(hn(Te(t), this.node, Ee), this.doc); };
    e.prototype.selectFirst = function (t) { var u = Ir(Te(t), this.node, Ee); return u ? new e(u, this.doc) : null; };
    e.prototype.is = function (t) { return vu(this.node, Te(t), Ee); };
    e.prototype.text = function () { return Su(this.node); };
    e.prototype.ownText = function () { return Au(this.node); };
    e.prototype.wholeText = function () { return dt(this.node); };
    e.prototype.data = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return t.data; }).join(""); };
    e.prototype.html = function () { return (this.node.children || []).map(function (t) { return It(t, { decodeEntities: !1 }); }).join("").trim(); };
    e.prototype.outerHtml = function () { return It(this.node, { decodeEntities: !1 }); };
    e.prototype.toString = function () { return this.outerHtml(); };
    e.prototype.tagName = function () { return this.node.name || ""; };
    e.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    e.prototype.id = function () { return this.attr("id"); };
    e.prototype.className = function () { return this.attr("class"); };
    e.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    e.prototype.hasClass = function (t) { return this.classNames().includes(t); };
    e.prototype.attr = function (t, u) { if (u !== void 0)
        return this.node.attribs && (this.node.attribs[t] = String(u)), this; if (!this.node.attribs)
        return ""; if (t.startsWith("abs:"))
        return Lr(this.baseUri, this.node.attribs[t.slice(4)] || ""); var n = this.node.attribs[t]; return n == null ? "" : n; };
    e.prototype.absUrl = function (t) { return this.attr("abs:" + t); };
    e.prototype.hasAttr = function (t) { return !!(this.node.attribs && (t.startsWith("abs:") ? t.slice(4) : t) in this.node.attribs); };
    e.prototype.removeAttr = function (t) { return this.node.attribs && delete this.node.attribs[t], this; };
    e.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    e.prototype.dataset = function () {
        var e_12, _b;
        var t = {};
        try {
            for (var _c = __values(Object.entries(this.node.attribs || {})), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _f = __read(_d.value, 2), u = _f[0], n = _f[1];
                u.startsWith("data-") && (t[u.slice(5)] = n);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return t;
    };
    e.prototype.val = function () { return this.attr("value"); };
    e.prototype.parent = function () { var t = this.node.parent; return t && t.type !== "root" ? new e(t, this.doc) : null; };
    e.prototype.parents = function () { var t = [], u = this.node.parent; for (; u && u.type !== "root";)
        t.push(u), u = u.parent; return nt.of(t, this.doc); };
    e.prototype.closest = function (t) { var u = this.node; for (; u && u.type !== "root";) {
        if (u.type === "tag" && vu(u, Te(t), Ee))
            return new e(u, this.doc);
        u = u.parent;
    } return null; };
    e.prototype.children = function () { return nt.of((this.node.children || []).filter(P), this.doc); };
    e.prototype.child = function (t) { var u = (this.node.children || []).filter(P)[t]; return u ? new e(u, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(P).length; };
    e.prototype.nextElementSibling = function () { var t = Qe(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var t = Ye(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return nt.of(ce(this.node).filter(function (t) { return t !== _this.node && P(t); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return ce(this.node).filter(P).indexOf(this.node); };
    e.prototype.getElementsByTag = function (t) { return this.select(t); };
    e.prototype.getElementsByClass = function (t) { return this.select("." + t); };
    e.prototype.getElementById = function (t) { return this.selectFirst("#" + t); };
    e.prototype.remove = function () { return ct(this.node), this; };
    e.prototype.empty = function () { return this.node.children = [], this; };
    e.prototype.textNodes = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return ({ text: function () { return t.data; }, toString: function () { return t.data; } }); }); };
    e.prototype.title = function () { var t = this.selectFirst("title"); return t ? t.text() : ""; };
    e.prototype.body = function () { return this.selectFirst("body") || this; };
    e.prototype.head = function () { return this.selectFirst("head") || this; };
    e.prototype.location = function () { return this.baseUri; };
    return e;
}()), Eu = Object.create(Array.prototype), nt = { of: ku, prototype: Eu };
function ku(e, t) {
    var e_13, _b;
    var u = [];
    try {
        for (var _c = __values(e || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var n = _d.value;
            u.push(n instanceof yt ? n : new yt(n, t));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(u, Eu), u;
}
var Dr = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return nt.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (e) { return e.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (e) { return e.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (e, t) {
        var e_14, _b;
        if (t !== void 0)
            return this.forEach(function (u) { return u.attr(e, t); }), this;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                if (u.hasAttr(e))
                    return u.attr(e);
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_14) throw e_14.error; }
        }
        return "";
    }, eachAttr: function (e) { return this.filter(function (t) { return t.hasAttr(e); }).map(function (t) { return t.attr(e); }); }, hasAttr: function (e) { return this.some(function (t) { return t.hasAttr(e); }); }, hasClass: function (e) { return this.some(function (t) { return t.hasClass(e); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (e) {
        var e_15, _b, e_16, _c;
        var t = ku([]), u = new Set;
        try {
            for (var _d = __values(this), _f = _d.next(); !_f.done; _f = _d.next()) {
                var n = _f.value;
                try {
                    for (var _g = (e_16 = void 0, __values(n.select(e))), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var i = _h.value;
                        u.has(i.node) || (u.add(i.node), t.push(i));
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return t;
    }, selectFirst: function (e) {
        var e_17, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var t = _d.value;
                var u = t.selectFirst(e);
                if (u)
                    return u;
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_17) throw e_17.error; }
        }
        return null;
    }, is: function (e) { return this.some(function (t) { return t.is(e); }); }, not: function (e) { return nt.of(this.filter(function (t) { return !t.is(e); }), null); }, parents: function () {
        var e_18, _b;
        var e = ku([]);
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var t = _d.value;
                e.push.apply(e, __spreadArray([], __read(t.parents()), false));
            }
        }
        catch (e_18_1) { e_18 = { error: e_18_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_18) throw e_18.error; }
        }
        return e;
    }, next: function () { return nt.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return nt.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (t) { return t.removeAttr(e); }), this; } };
try {
    for (var _c = __values(Object.keys(Dr)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var e = _d.value;
        Object.defineProperty(Eu, e, { value: Dr[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
function Ne(e, t) { var u = rr(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), n = new yt(u, null); n.doc = n, n.__base = t || ""; var i = Ir("base[href]", u); return i && i.attribs.href && (n.__base = Lr(n.__base, i.attribs.href)), n; }
function Or(e, t) { var u = new Set((t || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), n = Ne(e), i = function (s) {
    var e_19, _b, e_20, _c;
    try {
        for (var _d = __values((s.children || []).slice()), _f = _d.next(); !_f.done; _f = _d.next()) {
            var h = _f.value;
            if (h.type === "script" || h.type === "style" || h.type === "comment") {
                ct(h);
                continue;
            }
            if (h.type === "tag" && (i(h), !u.has(h.name))) {
                var g = (h.children || []).slice();
                try {
                    for (var g_3 = (e_20 = void 0, __values(g)), g_3_1 = g_3.next(); !g_3_1.done; g_3_1 = g_3.next()) {
                        var w = g_3_1.value;
                        tu(h, w);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (g_3_1 && !g_3_1.done && (_c = g_3.return)) _c.call(g_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                ct(h);
            }
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
        }
        finally { if (e_19) throw e_19.error; }
    }
}; return i(n.node), It(n.node.children, { decodeEntities: !1 }); }
var Kt = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function bn(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var t = ""; for (var u = 0; u < e.length; u++)
    t += String.fromCharCode(e[u]); return Nr(t); }
function Ur(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (t) { return t.charCodeAt(0); }); }
function gn(e) { var t = ""; for (var u = 0; u < e.length; u++) {
    var n = e.charCodeAt(u);
    if (n < 128) {
        t += e[u];
        continue;
    }
    if (n === 128) {
        t += "€";
        continue;
    }
    var i = e.charCodeAt(u + 1);
    n >= 129 && n <= 254 && i >= 64 && i <= 254 && i !== 127 ? (t += __GBK_TABLE[(n - 129) * 190 + (i - 64) - (i > 127 ? 1 : 0)], u++) : t += "�";
} return t; }
var Tu = (function () {
    function Tu(t, u) {
        this.status = t.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText || String(this.status), this.url = t.url || u.url, this.headers = t.headers || {}, this._raw = t, this.request = { url: u.url, headers: u.headers || {} };
    }
    Tu.prototype.header = function (t) { var u = Object.keys(this.headers).find(function (n) { return n.toLowerCase() === String(t).toLowerCase(); }); return u ? this.headers[u] : ""; };
    Tu.prototype.text = function (t) { if (t && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(t).toLowerCase()).decode(this._raw.bytes);
        }
        catch (n) { } var u = this._raw.text == null ? "" : String(this._raw.text); return t || (t = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), t && /^(gbk|gb2312|gb18030)$/i.test(String(t)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(u) && !/[^\x00-\xff]/.test(u) ? gn(u) : u; };
    Tu.prototype.string = function (t) { return this.text(t); };
    Tu.prototype.html = function (t) { return Ne(this.text(t), this.url); };
    Tu.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (t) {
        return null;
    } };
    Tu.prototype.base64 = function () { return bn(this._raw.bytes || Ur(this.text())); };
    Tu.prototype.blob = function () { var t = this; return { size: (this._raw.bytes || Ur(this.text())).length, type: this.header("content-type"), base64: function () { return t.base64(); } }; };
    return Tu;
}());
function mn(e) {
    var e_21, _b;
    var t = {};
    if (!e)
        return t;
    if (typeof e.forEach == "function" && !Array.isArray(e) && typeof e.entries == "function")
        return e.forEach(function (u, n) { t[n] = u; }), t;
    try {
        for (var _c = __values(Object.keys(e)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var u = _d.value;
            t[u] = String(e[u]);
        }
    }
    catch (e_21_1) { e_21 = { error: e_21_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_21) throw e_21.error; }
    }
    return t;
}
function Mr(e, t) { var u = function (h) { return ({ getItem: function (g) { var w = e.storageGet(h + g); return w == null ? null : w; }, setItem: function (g, w) { return e.storageSet(h + g, w == null ? null : String(w)); }, removeItem: function (g) { return e.storageSet(h + g, null); }, clear: function () { return e.storageClear && e.storageClear(h); } }); }, n = "__cookie__", i = {}; i.Response = { success: function (h, g) { return ({ code: 0, data: h === void 0 ? null : h, data2: g === void 0 ? null : g }); }, error: function (h) { return ({ code: 1, data: h == null ? "" : String(h) }); } }, i.fetch = function (g, w) {
    return __awaiter(this, void 0, void 0, function () { var S, U, T, I, N, U, q, _, U_1; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                w = w || {};
                S = String(g);
                if (w.queries) {
                    U = Object.entries(w.queries).map(function (_b) {
                        var _c = __read(_b, 2), W = _c[0], Z = _c[1];
                        return encodeURIComponent(W) + "=" + encodeURIComponent(Z);
                    }).join("&");
                    U && (S += (S.includes("?") ? "&" : "?") + U);
                }
                T = Object.assign({ "User-Agent": Kt }, mn(w.headers)), I = e.storageGet(n);
                I && !Object.keys(T).some(function (U) { return U.toLowerCase() === "cookie"; }) && (T.Cookie = I);
                N = w.body;
                if (N != null && typeof N == "object") {
                    U = Object.keys(T).find(function (W) { return W.toLowerCase() === "content-type"; });
                    U && /json/i.test(T[U]) ? N = JSON.stringify(N) : (N = Object.entries(N).map(function (_b) {
                        var _c = __read(_b, 2), W = _c[0], Z = _c[1];
                        return encodeURIComponent(W) + "=" + encodeURIComponent(Z);
                    }).join("&"), U || (T["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                q = { url: S, method: (w.method || (N != null ? "POST" : "GET")).toUpperCase(), headers: T, body: N, timeout: w.timeout };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4, e.request(q)];
            case 2:
                _ = _b.sent();
                return [3, 4];
            case 3:
                U_1 = _b.sent();
                _ = { status: 0, url: S, headers: {}, text: "", error: String(U_1 && U_1.message || U_1) };
                return [3, 4];
            case 4: return [2, new Tu(_, q)];
        }
    }); });
}, i.Http = { get: function (h) { return Pr(i, "GET", h); }, post: function (h) { return Pr(i, "POST", h); } }, i.Html = { parse: function (h, g) { return Ne(h, g || ""); }, clean: function (h, g) { return Or(h, g); } }, i.localStorage = u("ls:"), i.cacheStorage = u("cs:"), i.localConfig = { getItem: function (h) { return e.config(h); } }, i.localCookie = { setCookie: function (h) { e.storageSet(n, String(h).split(";")[0]); }, getCookie: function () { return e.storageGet(n) || ""; } }, i.sleep = function (h) { return new Promise(function (g) { return typeof setTimeout == "function" ? setTimeout(g, Math.min(Number(h) || 0, 1e4)) : g(); }); }; var s = function () {
    var h = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        h[_i] = arguments[_i];
    }
    try {
        e.log && e.log(h.map(function (g) { return typeof g == "string" ? g : JSON.stringify(g); }).join(" "));
    }
    catch (g) { }
}; return i.Log = { log: s }, i.console = { log: s, error: s, warn: s, info: s }, i.Console = i.console, i.log = s, i.UserAgent = { system: function () { return Kt; }, chrome: function () { return Kt; }, android: function () { return Kt; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, i.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, i.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, i.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, i.Elements = nt, i.Element = yt, i.__meta = t, i; }
function Pr(e, t, u) { var n = { method: t, url: u, headers: {}, body: void 0, queries: void 0 }, i = { headers: function (s) { return Object.assign(n.headers, s || {}), i; }, header: function (s, h) { return n.headers[s] = h, i; }, params: function (s) { return n.queries = s, i; }, queries: function (s) { return n.queries = s, i; }, body: function (s) { return n.body = s, i; }, html: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(n.url, n)];
                case 1: return [2, (_b.sent()).html(s)];
            }
        }); });
    }, string: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(n.url, n)];
                case 1: return [2, (_b.sent()).text(s)];
            }
        }); });
    }, text: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(n.url, n)];
                case 1: return [2, (_b.sent()).text(s)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(n.url, n)];
                case 1: return [2, (_b.sent()).json()];
            }
        }); });
    } }; return i; }
function St(e, t) { if (!t)
    return ""; if (t = String(t).trim(), /^data:|^blob:/.test(t))
    return t; if (t.startsWith("//"))
    return "https:" + t; if (typeof __abs == "function")
    return __abs(e, t); try {
    return ke(e, t);
}
catch (u) {
    return t;
} }
var F = function (e) { return e == null ? "" : String(e); }, xn = function (e) { return e.filter(function (t, u) { return t && e.indexOf(t) === u; }); }, qe = (function () {
    function class_1(t) {
        var u = t.meta, n = t.scripts, i = t.host;
        this.meta = u, this.host = i, this.env = t.env || Mr(i, u), this.scripts = n, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return F(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.has = function (t) { return !!this.scripts[t]; };
    class_1.prototype.run = function (t) {
        var u = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            u[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var n, i, s, h;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        n = this.scripts[t];
                        if (!n)
                            throw new Error("script " + t + " missing");
                        i = function (g) { var w = _this.host.config(g); return w == null ? (_this.meta.configDefaults || {})[g] : w; };
                        return [4, n(this.env, i)];
                    case 1:
                        s = _b.sent();
                        if (typeof s != "function")
                            throw new Error(t + ": execute() not defined");
                        return [4, s.apply(void 0, __spreadArray([], __read(u.map(F)), false))];
                    case 2:
                        h = _b.sent();
                        if (!h)
                            throw new Error(t + ": empty result");
                        if (h.code !== 0)
                            throw new Error(t + ": " + F(h.data || "error"));
                        return [2, h];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (t) { return F(t).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var t, _b, u_1, u_2; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    t = [];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    _b = this.has("home");
                    if (!_b) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _b = (t = (_c.sent()).data || []);
                    _c.label = 3;
                case 3:
                    _b;
                    return [3, 5];
                case 4:
                    u_1 = _c.sent();
                    this.host.log && this.host.log("home: " + u_1.message);
                    return [3, 5];
                case 5:
                    if (!(!t.length && this.has("genre"))) return [3, 9];
                    _c.label = 6;
                case 6:
                    _c.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    t = ((_c.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    u_2 = _c.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = t.filter(function (u) { return u && u.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (t, u, n) {
        return __awaiter(this, void 0, void 0, function () {
            var i, s, h, g, w;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        i = t + "|" + u;
                        n = Math.max(1, n | 0);
                        s = n === 1 ? "" : this.tokens[i + "|" + n];
                        if (n > 1 && s == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(t, u, s)];
                    case 1:
                        h = _b.sent(), g = F(h.data2);
                        g && (this.tokens[i + "|" + (n + 1)] = g);
                        w = (h.data || []).filter(Boolean).map(function (S) { return ({ name: F(S.name).trim(), link: St(S.host || _this.base + "/", S.link), cover: St(S.host || _this.base + "/", S.cover), description: F(S.description), tag: F(S.tag) }); }).filter(function (S) { return S.name && S.link; });
                        return [2, { items: w, hasNext: !!g && w.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent();
                    return [2, u[0] ? this.list(this.scriptFile(u[0].script), F(u[0].input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.latest = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, n; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent(), n = u[1] || u[0];
                    return [2, n ? this.list(this.scriptFile(n.script), F(n.input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.search = function (t, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, this.has("search") ? this.list("search", t, u) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, n; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("detail", t)];
                case 1:
                    u = (_b.sent()).data || {}, n = [].concat(u.genres || [], u.tags || []).map(function (i) { return typeof i == "string" ? i : i && i.title; }).filter(Boolean);
                    return [2, { name: F(u.name).trim(), cover: St(u.host || this.base + "/", u.cover), author: F(u.author).trim(), description: Br(F(u.description)), detail: Br(F(u.detail)), ongoing: u.ongoing !== !1 && u.ongoing !== "false", genres: xn(n.map(function (i) { return String(i).trim(); })), url: t, format: F(u.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, n, n_1, n_1_1, i, _b, _c, e_22_1, _d;
            var e_22, _f;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        u = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", t)];
                    case 1:
                        n = (_g.sent()).data || [t];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 7, 8, 9]);
                        n_1 = __values(n), n_1_1 = n_1.next();
                        _g.label = 3;
                    case 3:
                        if (!!n_1_1.done) return [3, 6];
                        i = n_1_1.value;
                        _c = (_b = u).concat;
                        return [4, this.run("toc", F(i))];
                    case 4:
                        u = _c.apply(_b, [(_g.sent()).data || []]);
                        _g.label = 5;
                    case 5:
                        n_1_1 = n_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_22_1 = _g.sent();
                        e_22 = { error: e_22_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (n_1_1 && !n_1_1.done && (_f = n_1.return)) _f.call(n_1);
                        }
                        finally { if (e_22) throw e_22.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _d = this.has("toc");
                        if (!_d) return [3, 12];
                        return [4, this.run("toc", t)];
                    case 11:
                        _d = (u = (_g.sent()).data || []);
                        _g.label = 12;
                    case 12:
                        _d;
                        _g.label = 13;
                    case 13: return [2, u.filter(function (n) { return n && n.url && n.type !== "section"; }).map(function (n, i) { return ({ name: F(n.name).trim() || "#" + (i + 1), url: St(n.host || _this.base + "/", n.url), pay: !!(n.pay || n.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, _b, _c, n, i;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", t)];
                    case 1:
                        _b = u = (_d.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", t)];
                    case 3:
                        _c = u = (_d.sent()).data;
                        return [3, 5];
                    case 4:
                        _c = u = [t];
                        _d.label = 5;
                    case 5:
                        _b = _c;
                        _d.label = 6;
                    case 6:
                        _b, typeof u == "string" && (u = u.split(/[\n,]+/));
                        n = function (s) { return !s || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(s)); }, i = function (s) { if (typeof s == "string")
                            return s; if (!s)
                            return ""; var h = s.link || s.url || s.data, g = Array.isArray(s.fallback) ? s.fallback.filter(Boolean) : []; return n(h) && g.length ? g[0] : h; };
                        return [2, (u || []).map(function (s) { return St(_this.base + "/", i(s)); }).filter(Boolean)];
                }
            });
        });
    };
    class_1.prototype.content = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("chap", t)];
                case 1:
                    u = _b.sent();
                    return [2, { html: F(u.data), title: F(u.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, i, n, u_3, u_3_1, i, s, h, h_2, h_2_1, g, s_2, e_23_1;
            var e_23, _b, e_24, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        u = [{ title: "Default", data: t }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", t)];
                    case 1:
                        i = (_d.sent()).data;
                        Array.isArray(i) && i.length && (u = i.map(function (s) { return typeof s == "string" ? { title: "Server", data: s } : { title: F(s.title || s.name || "Server"), data: F(s.data || s.url || s.link) }; }));
                        _d.label = 2;
                    case 2:
                        n = [];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        u_3 = __values(u), u_3_1 = u_3.next();
                        _d.label = 4;
                    case 4:
                        if (!!u_3_1.done) return [3, 9];
                        i = u_3_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4, this.run("track", i.data)];
                    case 6:
                        s = (_d.sent()).data || {}, h = Array.isArray(s) ? s : [s];
                        try {
                            for (h_2 = (e_24 = void 0, __values(h)), h_2_1 = h_2.next(); !h_2_1.done; h_2_1 = h_2.next()) {
                                g = h_2_1.value;
                                !g || !g.data || g.type !== "webview" && n.push({ url: St(g.host || this.base + "/", g.data), quality: i.title + (g.quality ? " " + g.quality : ""), headers: g.headers || { Referer: this.base + "/" }, subtitles: (g.subtitles || (g.subtitle ? [{ data: g.subtitle, label: "Sub" }] : [])).map(function (w) { return ({ file: St(_this.base + "/", w.data || w.file), label: F(w.label || w.language || "Sub") }); }), mimeType: F(g.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (h_2_1 && !h_2_1.done && (_c = h_2.return)) _c.call(h_2);
                            }
                            finally { if (e_24) throw e_24.error; }
                        }
                        return [3, 8];
                    case 7:
                        s_2 = _d.sent();
                        this.host.log && this.host.log("track " + i.title + ": " + s_2.message);
                        return [3, 8];
                    case 8:
                        u_3_1 = u_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_23_1 = _d.sent();
                        e_23 = { error: e_23_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (u_3_1 && !u_3_1.done && (_b = u_3.return)) _b.call(u_3);
                        }
                        finally { if (e_23) throw e_23.error; }
                        return [7];
                    case 12: return [2, n];
                }
            });
        });
    };
    return class_1;
}());
function Br(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
function H(e, t) {
    return __awaiter(this, void 0, void 0, function () { var u, n, _b, _c; return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                e = e || [];
                u = [], n = 0;
                _d.label = 1;
            case 1:
                if (!(n < e.length)) return [3, 4];
                _c = (_b = u).push;
                return [4, t(e[n], n, e)];
            case 2:
                _c.apply(_b, [_d.sent()]);
                _d.label = 3;
            case 3:
                n++;
                return [3, 1];
            case 4: return [2, u];
        }
    }); });
}
var ft = { id: "101kks", name: "101kks", source: "https://101kks.com", type: "novel", locale: "zh-CN", nsfw: !1, version: 3, config: { DOMAIN: { title: "Tên miền", subtitle: "Đổi khi trang đổi tên miền", default: "https://101kks.com", values: ["https://101kks.com"], mode: "input", format: "text" } }, configDefaults: { DOMAIN: "https://101kks.com" }, itemType: 2, lnId: "kiritokmn.101kks", lnIcon: "", lnVersion: "1.2.3" }, Fr = { home: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, n, i, s, h, g, w, S, T, I, N, q, _, U, W, Z, it) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = t("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function G() {
                                                        return __awaiter(this, void 0, void 0, function () { var r, a; return __generator(this, function (_b) {
                                                            r = [];
                                                            for (a in o.tabs)
                                                                r.push({ title: a, input: a, script: "browse.js" });
                                                            return [2, s.success(r)];
                                                        }); });
                                                    }
                                                    var k, o, d, v;
                                                    return __generator(this, function (_b) {
                                                        k = "https://101kks.com";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        o = { tabs: { 完本: "/novels/full/0_{p}.html", 分類: "/novels/class/0_{p}.html", 熱門: "/novels/hot" }, search: "/search/{q}/{p}.html", ch_list: "li a[href*='/txt/']", item: "#article_list_content > li", title: "h3", link: "a[href*='/book/']@href", cover: "img@img", desc: "h4", pageSize: 8, d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content", d_author: "meta[property=og:novel:author]@content", d_desc: "meta[property=og:description]@content", d_status: "meta[property=og:novel:status]@content", ch_rewrite: ["/book/(\\d+)\\.html.*$", "/ajax_novels/chapterlist/$1.html"], content: "#txtcontent", c_title: "h1" }, d = { img: function (r) { if (!r)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < a.length; c++) {
                                                                var l = r.attr(a[c]);
                                                                if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                                    return d.fix(l.trim());
                                                            } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? k + r : k + "/" + r) : ""; }, text: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < a.length)) return [3, 4];
                                                                            return [4, r.select(a[c]).text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, l.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            c = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (l in a.headers)
                                                                                    c[l] = a.headers[l];
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 1:
                                                                            f = _c.sent(), p = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = f && f.status === 429 && p < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(f)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, T(1500 * (p + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 6:
                                                                            f = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            p++;
                                                                            return [3, 2];
                                                                        case 8: return [2, f];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var a = parseInt(r || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (r, a) { return r ? String(d.page(a) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, v = { pick: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m, y, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !r)
                                                                                return [2, ""];
                                                                            c = String(a).split(" || "), l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < c.length)) return [3, 9];
                                                                            f = c[l], p = "text", b = f.lastIndexOf("@");
                                                                            b > 0 && !/\[[^\]]*@/.test(f.slice(b)) && (p = f.slice(b + 1), f = f.slice(0, b));
                                                                            x = f === ":self" ? null : r.select(f), m = f === ":self" ? r : x.size() ? x.first() : null;
                                                                            if (!m) return [3, 8];
                                                                            if (!(p === "text")) return [3, 3];
                                                                            return [4, m.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(p === "html")) return [3, 5];
                                                                            return [4, m.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = p === "img" ? d.img(m.is("img") ? m : m.select("img").first()) : p === "own" ? m.ownText() : m.attr(p);
                                                                            _d.label = 6;
                                                                        case 6:
                                                                            _b = _c;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            y = _b;
                                                                            if (y)
                                                                                return [2, String(y).trim()];
                                                                            _d.label = 8;
                                                                        case 8:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (r, a, c) { var l = d.page(a), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, b) { return l > 1 ? b : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(c || "")).replace(/\{base\}/g, k), d.fix(f); }, items: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, b, x, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                a = r.select(o.item), c = [], l = {}, f = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(f < a.size())) return [3, 9];
                                                                                return [4, a.get(f)];
                                                                            case 2:
                                                                                p = _g.sent();
                                                                                return [4, v.pick(p, o.link || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || l[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, v.pick(p, o.title || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                x = _g.sent();
                                                                                _b = x;
                                                                                if (!_b) return [3, 7];
                                                                                l[b] = 1;
                                                                                _d = (_c = c).push;
                                                                                _f = { name: x, link: d.fix(b) };
                                                                                return [4, v.pick(p, o.cover || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, v.pick(p, o.desc || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                f++;
                                                                                return [3, 1];
                                                                            case 9: return [2, c];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (r, a, c) {
                                                                return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(v.url(r, a, c), o.req)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l)];
                                                                        case 2:
                                                                            f = _b.sent(), p = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                            return [2, s.success(f, d.next(p && f.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = o.tabs && o.tabs[r] || r;
                                                                            return [4, v.listPage(c, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            c = d.fix(r);
                                                                            return [4, v.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2: return [4, v.listPage(o.search, a, r)];
                                                                        case 3: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var r, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.genre)
                                                                                return [2, s.success([])];
                                                                            return [4, d.html(d.fix(o.genrePage || "/"))];
                                                                        case 1:
                                                                            r = _b.sent();
                                                                            return [4, H(r.select(o.genre), function (c) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, c.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, s.success(a.filter(function (c) { return c.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(r, o.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!o.d_genres) return [3, 3];
                                                                                return [4, H(a.select(o.d_genres), function (f) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, f.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                _b = _j.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = [];
                                                                                _j.label = 4;
                                                                            case 4:
                                                                                c = _b;
                                                                                return [4, v.pick(a, o.d_status)];
                                                                            case 5:
                                                                                l = _j.sent();
                                                                                _d = (_c = s).success;
                                                                                _h = {};
                                                                                return [4, v.pick(a, o.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, v.pick(a, o.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, v.pick(a, o.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, v.pick(a, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = c, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, _b, b, x, m, y, A, _c, _d, _f, _g, L, M, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!o.ch_action) return [3, 2];
                                                                                return [4, v.actionToc(r)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (o.single)
                                                                                    return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: r, host: k }])];
                                                                                a = [r], c = [], l = {};
                                                                                return [4, d.html(o.ch_rewrite ? r.replace(new RegExp(o.ch_rewrite[0]), o.ch_rewrite[1]) : r, o.req)];
                                                                            case 3:
                                                                                f = _k.sent();
                                                                                if (!o.ch_url) return [3, 7];
                                                                                return [4, v.pick(f, o.ch_url)];
                                                                            case 4:
                                                                                p = _k.sent();
                                                                                _b = p;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(p), o.req)];
                                                                            case 5:
                                                                                _b = (f = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                b = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(b < (o.ch_maxPages || 60))) return [3, 22];
                                                                                x = f.select(o.ch_list), m = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(m < x.size())) return [3, 17];
                                                                                return [4, x.get(m)];
                                                                            case 10:
                                                                                y = _k.sent(), A = y.attr("href") || y.attr("data-href");
                                                                                _c = !A || A === "#" || l[A];
                                                                                if (_c) return [3, 15];
                                                                                l[A] = 1;
                                                                                _f = (_d = c).push;
                                                                                _j = {};
                                                                                if (!o.ch_name) return [3, 12];
                                                                                return [4, v.pick(y, o.ch_name)];
                                                                            case 11:
                                                                                _g = _k.sent();
                                                                                return [3, 14];
                                                                            case 12: return [4, y.text()];
                                                                            case 13:
                                                                                _g = _k.sent();
                                                                                _k.label = 14;
                                                                            case 14:
                                                                                _c = (_f.apply(_d, [(_j.name = (_g) || y.attr("title"), _j.url = d.fix(A), _j.host = k, _j)]));
                                                                                _k.label = 15;
                                                                            case 15:
                                                                                _c;
                                                                                _k.label = 16;
                                                                            case 16:
                                                                                m++;
                                                                                return [3, 9];
                                                                            case 17:
                                                                                L = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                                if (!L || !L.attr("href"))
                                                                                    return [3, 22];
                                                                                M = d.fix(L.attr("href"));
                                                                                if (a.indexOf(M) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(M);
                                                                                _h = o.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(o.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(M, o.req)];
                                                                            case 20:
                                                                                f = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                b++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (o.ch_reverse && c.reverse(), s.success(c))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, f, p, b, x, m, _b, _c, y, A; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            a = [], c = [r], l = r, f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                            return [4, d.html(l, o.req)];
                                                                        case 2:
                                                                            p = _d.sent(), b = p.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), x = 0;
                                                                            _d.label = 3;
                                                                        case 3:
                                                                            if (!(x < b.size())) return [3, 6];
                                                                            _c = (_b = d).img;
                                                                            return [4, b.get(x)];
                                                                        case 4:
                                                                            m = _c.apply(_b, [_d.sent()]);
                                                                            m && a.indexOf(m) < 0 && a.push(m);
                                                                            _d.label = 5;
                                                                        case 5:
                                                                            x++;
                                                                            return [3, 3];
                                                                        case 6:
                                                                            if (!o.pages_next)
                                                                                return [3, 8];
                                                                            y = p.select(o.pages_next).first();
                                                                            if (!y)
                                                                                return [3, 8];
                                                                            A = d.fix(y.attr("href"));
                                                                            if (!A || c.indexOf(A) >= 0)
                                                                                return [3, 8];
                                                                            c.push(A), l = A;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 8: return [2, s.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, _b, _c, l, f, p, _d, _f, _g, b, x, _h, _j, _k, _l, _m, _o; return __generator(this, function (_p) {
                                                                    switch (_p.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_p.sent(), r])];
                                                                        case 2:
                                                                            a = _p.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            c = (_p.sent()) || "";
                                                                            if (!o.content_rsc) return [3, 5];
                                                                            l = v.rscText(c), f = o.c_locked && new RegExp(o.c_locked, "i").test(c), p = f ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(l || f)) return [3, 5];
                                                                            _f = (_d = s).success;
                                                                            _g = [v.toParas(l) + p];
                                                                            return [4, v.pick(i.parse(c, r), o.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_p.sent()]))];
                                                                        case 5:
                                                                            b = i.parse(c, r), x = b.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!x) return [3, 7];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(c.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _j = (_h = s).error;
                                                                            _k = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, v.pick(b, "title")];
                                                                        case 6: return [2, _j.apply(_h, [_k + ((_p.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + c.length + " ký tự)" + (c.length < 400 ? ": " + c.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 7:
                                                                            _m = (_l = s).success;
                                                                            return [4, d.cleanContent(x)];
                                                                        case 8:
                                                                            _o = [_p.sent()];
                                                                            return [4, v.pick(b, o.c_title || "h1 || h2")];
                                                                        case 9: return [2, _m.apply(_l, _o.concat([_p.sent()]))];
                                                                    }
                                                                }); });
                                                            }, rscAction: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (c = [], f = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; l = f.exec(r);)
                                                                                c.indexOf(l[0]) < 0 && c.push(l[0]);
                                                                            p = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), b = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(b < c.length && b < 60)) return [3, 5];
                                                                            return [4, d.get(k + c[b])];
                                                                        case 2:
                                                                            x = _d.sent();
                                                                            if (!!(!x || !x.ok)) return [3, 4];
                                                                            _c = (_b = p).exec;
                                                                            return [4, x.text()];
                                                                        case 3:
                                                                            m = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (m)
                                                                                return [2, m[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            b++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (r) {
                                                                for (var a = String(r || "").split("\n"), c = 0; c < a.length; c++) {
                                                                    var l = /^[0-9a-f]+:(\[.*)$/.exec(a[c]);
                                                                    if (l)
                                                                        try {
                                                                            var f = JSON.parse(l[1]);
                                                                            if (f && f.length)
                                                                                return f;
                                                                        }
                                                                        catch (p) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, _b, _c, f, p, b, _d, x, _f, m; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = o.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), r])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            c = (_g.sent()) || "", l = new RegExp(a.arg).exec(c);
                                                                            if (!l)
                                                                                return [2, s.error("Không tìm thấy mã truyện trên trang " + r)];
                                                                            f = JSON.stringify([l[1]]), p = function (y) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(r, { method: "POST", headers: { "Next-Action": y, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: f })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = v).rscArray;
                                                                                            return [4, A.text()];
                                                                                        case 2:
                                                                                            _b = _d.apply(_c, [_f.sent()]);
                                                                                            return [3, 4];
                                                                                        case 3:
                                                                                            _b = null;
                                                                                            _f.label = 4;
                                                                                        case 4: return [2, _b];
                                                                                    }
                                                                                }); });
                                                                            };
                                                                            if (!a.id) return [3, 5];
                                                                            return [4, p(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            b = _d;
                                                                            if (!!b) return [3, 10];
                                                                            return [4, v.rscAction(c, a.name)];
                                                                        case 7:
                                                                            x = _g.sent();
                                                                            _f = x && x !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, p(x)];
                                                                        case 8:
                                                                            _f = (b = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!b)
                                                                                return [2, s.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            m = r.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, s.success(b.map(function (y) { return { name: String(y[a.title || "label"] || "") + (a.lock && y[a.lock] ? " 🔒" : ""), url: m + "/" + y[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (r) { for (var a = "", c, l = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; c = l.exec(r);)
                                                                try {
                                                                    a += JSON.parse(c[1]);
                                                                }
                                                                catch (M) { } for (var f = "", p = /([0-9a-f]+):T([0-9a-f]+),/g, b; b = p.exec(a);) {
                                                                for (var x = parseInt(b[2], 16), m = p.lastIndex, y = 0; m < a.length && y < x;) {
                                                                    var A = a.charCodeAt(m);
                                                                    A < 128 ? y += 1 : A < 2048 ? y += 2 : A >= 55296 && A <= 56319 ? (y += 4, m++) : y += 3, m++;
                                                                }
                                                                var L = a.slice(p.lastIndex, m);
                                                                L.length > f.length && (f = L), p.lastIndex = m;
                                                            } return f; }, toParas: function (r) { return /<p[\s>]|<br\s*\/?>/i.test(r) ? r : r.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.servers)
                                                                                return [2, s.success([{ title: "Server", data: r }])];
                                                                            return [4, d.html(r, o.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, H(a.select(o.servers), function (l) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var f;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, v.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    f = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, l.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            c = (_b.sent()).filter(function (l) { return l.data; });
                                                                            return [2, s.success(c.length ? c : [{ title: "Server", data: r }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var a = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                                return [2, s.success({ type: "native", data: r, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(r)];
                                                                        case 1:
                                                                            c = _b.sent();
                                                                            return [4, c.text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (!(o.video && !a)) return [3, 4];
                                                                            return [4, v.pick(i.parse(l, r), o.video)];
                                                                        case 3:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            p = v.sniff(l);
                                                                            if (p)
                                                                                return [2, s.success({ type: "native", data: p, headers: { Referer: a ? r : k + "/" } })];
                                                                            b = i.parse(l, r), x = b.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(x && a < 2)) return [3, 6];
                                                                            m = d.fix(x.attr("src") || x.attr("data-src"));
                                                                            if (!m) return [3, 6];
                                                                            return [4, v.track(m, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, s.success({ type: "webview", data: r })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof G == "function" ? G : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, search: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, n, i, s, h, g, w, S, T, I, N, q, _, U, W, Z, it) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = t("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function G(r, a) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, v.search(r, a)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, o, d, v;
                                                    return __generator(this, function (_b) {
                                                        k = "https://101kks.com";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        o = { tabs: { 完本: "/novels/full/0_{p}.html", 分類: "/novels/class/0_{p}.html", 熱門: "/novels/hot" }, search: "/search/{q}/{p}.html", ch_list: "li a[href*='/txt/']", item: "#article_list_content > li", title: "h3", link: "a[href*='/book/']@href", cover: "img@img", desc: "h4", pageSize: 8, d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content", d_author: "meta[property=og:novel:author]@content", d_desc: "meta[property=og:description]@content", d_status: "meta[property=og:novel:status]@content", ch_rewrite: ["/book/(\\d+)\\.html.*$", "/ajax_novels/chapterlist/$1.html"], content: "#txtcontent", c_title: "h1" }, d = { img: function (r) { if (!r)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < a.length; c++) {
                                                                var l = r.attr(a[c]);
                                                                if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                                    return d.fix(l.trim());
                                                            } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? k + r : k + "/" + r) : ""; }, text: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < a.length)) return [3, 4];
                                                                            return [4, r.select(a[c]).text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, l.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            c = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (l in a.headers)
                                                                                    c[l] = a.headers[l];
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 1:
                                                                            f = _c.sent(), p = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = f && f.status === 429 && p < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(f)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, T(1500 * (p + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 6:
                                                                            f = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            p++;
                                                                            return [3, 2];
                                                                        case 8: return [2, f];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var a = parseInt(r || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (r, a) { return r ? String(d.page(a) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, v = { pick: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m, y, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !r)
                                                                                return [2, ""];
                                                                            c = String(a).split(" || "), l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < c.length)) return [3, 9];
                                                                            f = c[l], p = "text", b = f.lastIndexOf("@");
                                                                            b > 0 && !/\[[^\]]*@/.test(f.slice(b)) && (p = f.slice(b + 1), f = f.slice(0, b));
                                                                            x = f === ":self" ? null : r.select(f), m = f === ":self" ? r : x.size() ? x.first() : null;
                                                                            if (!m) return [3, 8];
                                                                            if (!(p === "text")) return [3, 3];
                                                                            return [4, m.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(p === "html")) return [3, 5];
                                                                            return [4, m.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = p === "img" ? d.img(m.is("img") ? m : m.select("img").first()) : p === "own" ? m.ownText() : m.attr(p);
                                                                            _d.label = 6;
                                                                        case 6:
                                                                            _b = _c;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            y = _b;
                                                                            if (y)
                                                                                return [2, String(y).trim()];
                                                                            _d.label = 8;
                                                                        case 8:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (r, a, c) { var l = d.page(a), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, b) { return l > 1 ? b : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(c || "")).replace(/\{base\}/g, k), d.fix(f); }, items: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, b, x, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                a = r.select(o.item), c = [], l = {}, f = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(f < a.size())) return [3, 9];
                                                                                return [4, a.get(f)];
                                                                            case 2:
                                                                                p = _g.sent();
                                                                                return [4, v.pick(p, o.link || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || l[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, v.pick(p, o.title || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                x = _g.sent();
                                                                                _b = x;
                                                                                if (!_b) return [3, 7];
                                                                                l[b] = 1;
                                                                                _d = (_c = c).push;
                                                                                _f = { name: x, link: d.fix(b) };
                                                                                return [4, v.pick(p, o.cover || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, v.pick(p, o.desc || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                f++;
                                                                                return [3, 1];
                                                                            case 9: return [2, c];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (r, a, c) {
                                                                return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(v.url(r, a, c), o.req)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l)];
                                                                        case 2:
                                                                            f = _b.sent(), p = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                            return [2, s.success(f, d.next(p && f.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = o.tabs && o.tabs[r] || r;
                                                                            return [4, v.listPage(c, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            c = d.fix(r);
                                                                            return [4, v.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2: return [4, v.listPage(o.search, a, r)];
                                                                        case 3: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var r, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.genre)
                                                                                return [2, s.success([])];
                                                                            return [4, d.html(d.fix(o.genrePage || "/"))];
                                                                        case 1:
                                                                            r = _b.sent();
                                                                            return [4, H(r.select(o.genre), function (c) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, c.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, s.success(a.filter(function (c) { return c.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(r, o.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!o.d_genres) return [3, 3];
                                                                                return [4, H(a.select(o.d_genres), function (f) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, f.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                _b = _j.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = [];
                                                                                _j.label = 4;
                                                                            case 4:
                                                                                c = _b;
                                                                                return [4, v.pick(a, o.d_status)];
                                                                            case 5:
                                                                                l = _j.sent();
                                                                                _d = (_c = s).success;
                                                                                _h = {};
                                                                                return [4, v.pick(a, o.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, v.pick(a, o.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, v.pick(a, o.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, v.pick(a, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = c, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, _b, b, x, m, y, A, _c, _d, _f, _g, L, M, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!o.ch_action) return [3, 2];
                                                                                return [4, v.actionToc(r)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (o.single)
                                                                                    return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: r, host: k }])];
                                                                                a = [r], c = [], l = {};
                                                                                return [4, d.html(o.ch_rewrite ? r.replace(new RegExp(o.ch_rewrite[0]), o.ch_rewrite[1]) : r, o.req)];
                                                                            case 3:
                                                                                f = _k.sent();
                                                                                if (!o.ch_url) return [3, 7];
                                                                                return [4, v.pick(f, o.ch_url)];
                                                                            case 4:
                                                                                p = _k.sent();
                                                                                _b = p;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(p), o.req)];
                                                                            case 5:
                                                                                _b = (f = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                b = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(b < (o.ch_maxPages || 60))) return [3, 22];
                                                                                x = f.select(o.ch_list), m = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(m < x.size())) return [3, 17];
                                                                                return [4, x.get(m)];
                                                                            case 10:
                                                                                y = _k.sent(), A = y.attr("href") || y.attr("data-href");
                                                                                _c = !A || A === "#" || l[A];
                                                                                if (_c) return [3, 15];
                                                                                l[A] = 1;
                                                                                _f = (_d = c).push;
                                                                                _j = {};
                                                                                if (!o.ch_name) return [3, 12];
                                                                                return [4, v.pick(y, o.ch_name)];
                                                                            case 11:
                                                                                _g = _k.sent();
                                                                                return [3, 14];
                                                                            case 12: return [4, y.text()];
                                                                            case 13:
                                                                                _g = _k.sent();
                                                                                _k.label = 14;
                                                                            case 14:
                                                                                _c = (_f.apply(_d, [(_j.name = (_g) || y.attr("title"), _j.url = d.fix(A), _j.host = k, _j)]));
                                                                                _k.label = 15;
                                                                            case 15:
                                                                                _c;
                                                                                _k.label = 16;
                                                                            case 16:
                                                                                m++;
                                                                                return [3, 9];
                                                                            case 17:
                                                                                L = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                                if (!L || !L.attr("href"))
                                                                                    return [3, 22];
                                                                                M = d.fix(L.attr("href"));
                                                                                if (a.indexOf(M) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(M);
                                                                                _h = o.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(o.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(M, o.req)];
                                                                            case 20:
                                                                                f = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                b++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (o.ch_reverse && c.reverse(), s.success(c))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, f, p, b, x, m, _b, _c, y, A; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            a = [], c = [r], l = r, f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                            return [4, d.html(l, o.req)];
                                                                        case 2:
                                                                            p = _d.sent(), b = p.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), x = 0;
                                                                            _d.label = 3;
                                                                        case 3:
                                                                            if (!(x < b.size())) return [3, 6];
                                                                            _c = (_b = d).img;
                                                                            return [4, b.get(x)];
                                                                        case 4:
                                                                            m = _c.apply(_b, [_d.sent()]);
                                                                            m && a.indexOf(m) < 0 && a.push(m);
                                                                            _d.label = 5;
                                                                        case 5:
                                                                            x++;
                                                                            return [3, 3];
                                                                        case 6:
                                                                            if (!o.pages_next)
                                                                                return [3, 8];
                                                                            y = p.select(o.pages_next).first();
                                                                            if (!y)
                                                                                return [3, 8];
                                                                            A = d.fix(y.attr("href"));
                                                                            if (!A || c.indexOf(A) >= 0)
                                                                                return [3, 8];
                                                                            c.push(A), l = A;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 8: return [2, s.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, _b, _c, l, f, p, _d, _f, _g, b, x, _h, _j, _k, _l, _m, _o; return __generator(this, function (_p) {
                                                                    switch (_p.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_p.sent(), r])];
                                                                        case 2:
                                                                            a = _p.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            c = (_p.sent()) || "";
                                                                            if (!o.content_rsc) return [3, 5];
                                                                            l = v.rscText(c), f = o.c_locked && new RegExp(o.c_locked, "i").test(c), p = f ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(l || f)) return [3, 5];
                                                                            _f = (_d = s).success;
                                                                            _g = [v.toParas(l) + p];
                                                                            return [4, v.pick(i.parse(c, r), o.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_p.sent()]))];
                                                                        case 5:
                                                                            b = i.parse(c, r), x = b.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!x) return [3, 7];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(c.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _j = (_h = s).error;
                                                                            _k = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, v.pick(b, "title")];
                                                                        case 6: return [2, _j.apply(_h, [_k + ((_p.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + c.length + " ký tự)" + (c.length < 400 ? ": " + c.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 7:
                                                                            _m = (_l = s).success;
                                                                            return [4, d.cleanContent(x)];
                                                                        case 8:
                                                                            _o = [_p.sent()];
                                                                            return [4, v.pick(b, o.c_title || "h1 || h2")];
                                                                        case 9: return [2, _m.apply(_l, _o.concat([_p.sent()]))];
                                                                    }
                                                                }); });
                                                            }, rscAction: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (c = [], f = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; l = f.exec(r);)
                                                                                c.indexOf(l[0]) < 0 && c.push(l[0]);
                                                                            p = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), b = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(b < c.length && b < 60)) return [3, 5];
                                                                            return [4, d.get(k + c[b])];
                                                                        case 2:
                                                                            x = _d.sent();
                                                                            if (!!(!x || !x.ok)) return [3, 4];
                                                                            _c = (_b = p).exec;
                                                                            return [4, x.text()];
                                                                        case 3:
                                                                            m = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (m)
                                                                                return [2, m[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            b++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (r) {
                                                                for (var a = String(r || "").split("\n"), c = 0; c < a.length; c++) {
                                                                    var l = /^[0-9a-f]+:(\[.*)$/.exec(a[c]);
                                                                    if (l)
                                                                        try {
                                                                            var f = JSON.parse(l[1]);
                                                                            if (f && f.length)
                                                                                return f;
                                                                        }
                                                                        catch (p) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, _b, _c, f, p, b, _d, x, _f, m; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = o.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), r])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            c = (_g.sent()) || "", l = new RegExp(a.arg).exec(c);
                                                                            if (!l)
                                                                                return [2, s.error("Không tìm thấy mã truyện trên trang " + r)];
                                                                            f = JSON.stringify([l[1]]), p = function (y) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(r, { method: "POST", headers: { "Next-Action": y, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: f })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = v).rscArray;
                                                                                            return [4, A.text()];
                                                                                        case 2:
                                                                                            _b = _d.apply(_c, [_f.sent()]);
                                                                                            return [3, 4];
                                                                                        case 3:
                                                                                            _b = null;
                                                                                            _f.label = 4;
                                                                                        case 4: return [2, _b];
                                                                                    }
                                                                                }); });
                                                                            };
                                                                            if (!a.id) return [3, 5];
                                                                            return [4, p(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            b = _d;
                                                                            if (!!b) return [3, 10];
                                                                            return [4, v.rscAction(c, a.name)];
                                                                        case 7:
                                                                            x = _g.sent();
                                                                            _f = x && x !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, p(x)];
                                                                        case 8:
                                                                            _f = (b = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!b)
                                                                                return [2, s.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            m = r.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, s.success(b.map(function (y) { return { name: String(y[a.title || "label"] || "") + (a.lock && y[a.lock] ? " 🔒" : ""), url: m + "/" + y[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (r) { for (var a = "", c, l = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; c = l.exec(r);)
                                                                try {
                                                                    a += JSON.parse(c[1]);
                                                                }
                                                                catch (M) { } for (var f = "", p = /([0-9a-f]+):T([0-9a-f]+),/g, b; b = p.exec(a);) {
                                                                for (var x = parseInt(b[2], 16), m = p.lastIndex, y = 0; m < a.length && y < x;) {
                                                                    var A = a.charCodeAt(m);
                                                                    A < 128 ? y += 1 : A < 2048 ? y += 2 : A >= 55296 && A <= 56319 ? (y += 4, m++) : y += 3, m++;
                                                                }
                                                                var L = a.slice(p.lastIndex, m);
                                                                L.length > f.length && (f = L), p.lastIndex = m;
                                                            } return f; }, toParas: function (r) { return /<p[\s>]|<br\s*\/?>/i.test(r) ? r : r.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.servers)
                                                                                return [2, s.success([{ title: "Server", data: r }])];
                                                                            return [4, d.html(r, o.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, H(a.select(o.servers), function (l) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var f;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, v.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    f = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, l.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            c = (_b.sent()).filter(function (l) { return l.data; });
                                                                            return [2, s.success(c.length ? c : [{ title: "Server", data: r }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var a = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                                return [2, s.success({ type: "native", data: r, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(r)];
                                                                        case 1:
                                                                            c = _b.sent();
                                                                            return [4, c.text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (!(o.video && !a)) return [3, 4];
                                                                            return [4, v.pick(i.parse(l, r), o.video)];
                                                                        case 3:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            p = v.sniff(l);
                                                                            if (p)
                                                                                return [2, s.success({ type: "native", data: p, headers: { Referer: a ? r : k + "/" } })];
                                                                            b = i.parse(l, r), x = b.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(x && a < 2)) return [3, 6];
                                                                            m = d.fix(x.attr("src") || x.attr("data-src"));
                                                                            if (!m) return [3, 6];
                                                                            return [4, v.track(m, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, s.success({ type: "webview", data: r })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof G == "function" ? G : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, detail: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, n, i, s, h, g, w, S, T, I, N, q, _, U, W, Z, it) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = t("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function G(r) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, v.detail(r)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, o, d, v;
                                                    return __generator(this, function (_b) {
                                                        k = "https://101kks.com";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        o = { tabs: { 完本: "/novels/full/0_{p}.html", 分類: "/novels/class/0_{p}.html", 熱門: "/novels/hot" }, search: "/search/{q}/{p}.html", ch_list: "li a[href*='/txt/']", item: "#article_list_content > li", title: "h3", link: "a[href*='/book/']@href", cover: "img@img", desc: "h4", pageSize: 8, d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content", d_author: "meta[property=og:novel:author]@content", d_desc: "meta[property=og:description]@content", d_status: "meta[property=og:novel:status]@content", ch_rewrite: ["/book/(\\d+)\\.html.*$", "/ajax_novels/chapterlist/$1.html"], content: "#txtcontent", c_title: "h1" }, d = { img: function (r) { if (!r)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < a.length; c++) {
                                                                var l = r.attr(a[c]);
                                                                if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                                    return d.fix(l.trim());
                                                            } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? k + r : k + "/" + r) : ""; }, text: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < a.length)) return [3, 4];
                                                                            return [4, r.select(a[c]).text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, l.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            c = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (l in a.headers)
                                                                                    c[l] = a.headers[l];
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 1:
                                                                            f = _c.sent(), p = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = f && f.status === 429 && p < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(f)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, T(1500 * (p + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 6:
                                                                            f = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            p++;
                                                                            return [3, 2];
                                                                        case 8: return [2, f];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var a = parseInt(r || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (r, a) { return r ? String(d.page(a) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, v = { pick: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m, y, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !r)
                                                                                return [2, ""];
                                                                            c = String(a).split(" || "), l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < c.length)) return [3, 9];
                                                                            f = c[l], p = "text", b = f.lastIndexOf("@");
                                                                            b > 0 && !/\[[^\]]*@/.test(f.slice(b)) && (p = f.slice(b + 1), f = f.slice(0, b));
                                                                            x = f === ":self" ? null : r.select(f), m = f === ":self" ? r : x.size() ? x.first() : null;
                                                                            if (!m) return [3, 8];
                                                                            if (!(p === "text")) return [3, 3];
                                                                            return [4, m.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(p === "html")) return [3, 5];
                                                                            return [4, m.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = p === "img" ? d.img(m.is("img") ? m : m.select("img").first()) : p === "own" ? m.ownText() : m.attr(p);
                                                                            _d.label = 6;
                                                                        case 6:
                                                                            _b = _c;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            y = _b;
                                                                            if (y)
                                                                                return [2, String(y).trim()];
                                                                            _d.label = 8;
                                                                        case 8:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (r, a, c) { var l = d.page(a), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, b) { return l > 1 ? b : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(c || "")).replace(/\{base\}/g, k), d.fix(f); }, items: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, b, x, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                a = r.select(o.item), c = [], l = {}, f = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(f < a.size())) return [3, 9];
                                                                                return [4, a.get(f)];
                                                                            case 2:
                                                                                p = _g.sent();
                                                                                return [4, v.pick(p, o.link || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || l[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, v.pick(p, o.title || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                x = _g.sent();
                                                                                _b = x;
                                                                                if (!_b) return [3, 7];
                                                                                l[b] = 1;
                                                                                _d = (_c = c).push;
                                                                                _f = { name: x, link: d.fix(b) };
                                                                                return [4, v.pick(p, o.cover || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, v.pick(p, o.desc || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                f++;
                                                                                return [3, 1];
                                                                            case 9: return [2, c];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (r, a, c) {
                                                                return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(v.url(r, a, c), o.req)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l)];
                                                                        case 2:
                                                                            f = _b.sent(), p = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                            return [2, s.success(f, d.next(p && f.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = o.tabs && o.tabs[r] || r;
                                                                            return [4, v.listPage(c, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            c = d.fix(r);
                                                                            return [4, v.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2: return [4, v.listPage(o.search, a, r)];
                                                                        case 3: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var r, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.genre)
                                                                                return [2, s.success([])];
                                                                            return [4, d.html(d.fix(o.genrePage || "/"))];
                                                                        case 1:
                                                                            r = _b.sent();
                                                                            return [4, H(r.select(o.genre), function (c) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, c.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, s.success(a.filter(function (c) { return c.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(r, o.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!o.d_genres) return [3, 3];
                                                                                return [4, H(a.select(o.d_genres), function (f) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, f.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                _b = _j.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = [];
                                                                                _j.label = 4;
                                                                            case 4:
                                                                                c = _b;
                                                                                return [4, v.pick(a, o.d_status)];
                                                                            case 5:
                                                                                l = _j.sent();
                                                                                _d = (_c = s).success;
                                                                                _h = {};
                                                                                return [4, v.pick(a, o.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, v.pick(a, o.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, v.pick(a, o.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, v.pick(a, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = c, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, _b, b, x, m, y, A, _c, _d, _f, _g, L, M, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!o.ch_action) return [3, 2];
                                                                                return [4, v.actionToc(r)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (o.single)
                                                                                    return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: r, host: k }])];
                                                                                a = [r], c = [], l = {};
                                                                                return [4, d.html(o.ch_rewrite ? r.replace(new RegExp(o.ch_rewrite[0]), o.ch_rewrite[1]) : r, o.req)];
                                                                            case 3:
                                                                                f = _k.sent();
                                                                                if (!o.ch_url) return [3, 7];
                                                                                return [4, v.pick(f, o.ch_url)];
                                                                            case 4:
                                                                                p = _k.sent();
                                                                                _b = p;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(p), o.req)];
                                                                            case 5:
                                                                                _b = (f = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                b = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(b < (o.ch_maxPages || 60))) return [3, 22];
                                                                                x = f.select(o.ch_list), m = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(m < x.size())) return [3, 17];
                                                                                return [4, x.get(m)];
                                                                            case 10:
                                                                                y = _k.sent(), A = y.attr("href") || y.attr("data-href");
                                                                                _c = !A || A === "#" || l[A];
                                                                                if (_c) return [3, 15];
                                                                                l[A] = 1;
                                                                                _f = (_d = c).push;
                                                                                _j = {};
                                                                                if (!o.ch_name) return [3, 12];
                                                                                return [4, v.pick(y, o.ch_name)];
                                                                            case 11:
                                                                                _g = _k.sent();
                                                                                return [3, 14];
                                                                            case 12: return [4, y.text()];
                                                                            case 13:
                                                                                _g = _k.sent();
                                                                                _k.label = 14;
                                                                            case 14:
                                                                                _c = (_f.apply(_d, [(_j.name = (_g) || y.attr("title"), _j.url = d.fix(A), _j.host = k, _j)]));
                                                                                _k.label = 15;
                                                                            case 15:
                                                                                _c;
                                                                                _k.label = 16;
                                                                            case 16:
                                                                                m++;
                                                                                return [3, 9];
                                                                            case 17:
                                                                                L = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                                if (!L || !L.attr("href"))
                                                                                    return [3, 22];
                                                                                M = d.fix(L.attr("href"));
                                                                                if (a.indexOf(M) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(M);
                                                                                _h = o.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(o.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(M, o.req)];
                                                                            case 20:
                                                                                f = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                b++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (o.ch_reverse && c.reverse(), s.success(c))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, f, p, b, x, m, _b, _c, y, A; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            a = [], c = [r], l = r, f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                            return [4, d.html(l, o.req)];
                                                                        case 2:
                                                                            p = _d.sent(), b = p.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), x = 0;
                                                                            _d.label = 3;
                                                                        case 3:
                                                                            if (!(x < b.size())) return [3, 6];
                                                                            _c = (_b = d).img;
                                                                            return [4, b.get(x)];
                                                                        case 4:
                                                                            m = _c.apply(_b, [_d.sent()]);
                                                                            m && a.indexOf(m) < 0 && a.push(m);
                                                                            _d.label = 5;
                                                                        case 5:
                                                                            x++;
                                                                            return [3, 3];
                                                                        case 6:
                                                                            if (!o.pages_next)
                                                                                return [3, 8];
                                                                            y = p.select(o.pages_next).first();
                                                                            if (!y)
                                                                                return [3, 8];
                                                                            A = d.fix(y.attr("href"));
                                                                            if (!A || c.indexOf(A) >= 0)
                                                                                return [3, 8];
                                                                            c.push(A), l = A;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 8: return [2, s.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, _b, _c, l, f, p, _d, _f, _g, b, x, _h, _j, _k, _l, _m, _o; return __generator(this, function (_p) {
                                                                    switch (_p.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_p.sent(), r])];
                                                                        case 2:
                                                                            a = _p.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            c = (_p.sent()) || "";
                                                                            if (!o.content_rsc) return [3, 5];
                                                                            l = v.rscText(c), f = o.c_locked && new RegExp(o.c_locked, "i").test(c), p = f ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(l || f)) return [3, 5];
                                                                            _f = (_d = s).success;
                                                                            _g = [v.toParas(l) + p];
                                                                            return [4, v.pick(i.parse(c, r), o.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_p.sent()]))];
                                                                        case 5:
                                                                            b = i.parse(c, r), x = b.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!x) return [3, 7];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(c.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _j = (_h = s).error;
                                                                            _k = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, v.pick(b, "title")];
                                                                        case 6: return [2, _j.apply(_h, [_k + ((_p.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + c.length + " ký tự)" + (c.length < 400 ? ": " + c.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 7:
                                                                            _m = (_l = s).success;
                                                                            return [4, d.cleanContent(x)];
                                                                        case 8:
                                                                            _o = [_p.sent()];
                                                                            return [4, v.pick(b, o.c_title || "h1 || h2")];
                                                                        case 9: return [2, _m.apply(_l, _o.concat([_p.sent()]))];
                                                                    }
                                                                }); });
                                                            }, rscAction: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (c = [], f = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; l = f.exec(r);)
                                                                                c.indexOf(l[0]) < 0 && c.push(l[0]);
                                                                            p = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), b = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(b < c.length && b < 60)) return [3, 5];
                                                                            return [4, d.get(k + c[b])];
                                                                        case 2:
                                                                            x = _d.sent();
                                                                            if (!!(!x || !x.ok)) return [3, 4];
                                                                            _c = (_b = p).exec;
                                                                            return [4, x.text()];
                                                                        case 3:
                                                                            m = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (m)
                                                                                return [2, m[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            b++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (r) {
                                                                for (var a = String(r || "").split("\n"), c = 0; c < a.length; c++) {
                                                                    var l = /^[0-9a-f]+:(\[.*)$/.exec(a[c]);
                                                                    if (l)
                                                                        try {
                                                                            var f = JSON.parse(l[1]);
                                                                            if (f && f.length)
                                                                                return f;
                                                                        }
                                                                        catch (p) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, _b, _c, f, p, b, _d, x, _f, m; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = o.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), r])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            c = (_g.sent()) || "", l = new RegExp(a.arg).exec(c);
                                                                            if (!l)
                                                                                return [2, s.error("Không tìm thấy mã truyện trên trang " + r)];
                                                                            f = JSON.stringify([l[1]]), p = function (y) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(r, { method: "POST", headers: { "Next-Action": y, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: f })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = v).rscArray;
                                                                                            return [4, A.text()];
                                                                                        case 2:
                                                                                            _b = _d.apply(_c, [_f.sent()]);
                                                                                            return [3, 4];
                                                                                        case 3:
                                                                                            _b = null;
                                                                                            _f.label = 4;
                                                                                        case 4: return [2, _b];
                                                                                    }
                                                                                }); });
                                                                            };
                                                                            if (!a.id) return [3, 5];
                                                                            return [4, p(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            b = _d;
                                                                            if (!!b) return [3, 10];
                                                                            return [4, v.rscAction(c, a.name)];
                                                                        case 7:
                                                                            x = _g.sent();
                                                                            _f = x && x !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, p(x)];
                                                                        case 8:
                                                                            _f = (b = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!b)
                                                                                return [2, s.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            m = r.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, s.success(b.map(function (y) { return { name: String(y[a.title || "label"] || "") + (a.lock && y[a.lock] ? " 🔒" : ""), url: m + "/" + y[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (r) { for (var a = "", c, l = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; c = l.exec(r);)
                                                                try {
                                                                    a += JSON.parse(c[1]);
                                                                }
                                                                catch (M) { } for (var f = "", p = /([0-9a-f]+):T([0-9a-f]+),/g, b; b = p.exec(a);) {
                                                                for (var x = parseInt(b[2], 16), m = p.lastIndex, y = 0; m < a.length && y < x;) {
                                                                    var A = a.charCodeAt(m);
                                                                    A < 128 ? y += 1 : A < 2048 ? y += 2 : A >= 55296 && A <= 56319 ? (y += 4, m++) : y += 3, m++;
                                                                }
                                                                var L = a.slice(p.lastIndex, m);
                                                                L.length > f.length && (f = L), p.lastIndex = m;
                                                            } return f; }, toParas: function (r) { return /<p[\s>]|<br\s*\/?>/i.test(r) ? r : r.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.servers)
                                                                                return [2, s.success([{ title: "Server", data: r }])];
                                                                            return [4, d.html(r, o.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, H(a.select(o.servers), function (l) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var f;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, v.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    f = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, l.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            c = (_b.sent()).filter(function (l) { return l.data; });
                                                                            return [2, s.success(c.length ? c : [{ title: "Server", data: r }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var a = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                                return [2, s.success({ type: "native", data: r, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(r)];
                                                                        case 1:
                                                                            c = _b.sent();
                                                                            return [4, c.text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (!(o.video && !a)) return [3, 4];
                                                                            return [4, v.pick(i.parse(l, r), o.video)];
                                                                        case 3:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            p = v.sniff(l);
                                                                            if (p)
                                                                                return [2, s.success({ type: "native", data: p, headers: { Referer: a ? r : k + "/" } })];
                                                                            b = i.parse(l, r), x = b.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(x && a < 2)) return [3, 6];
                                                                            m = d.fix(x.attr("src") || x.attr("data-src"));
                                                                            if (!m) return [3, 6];
                                                                            return [4, v.track(m, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, s.success({ type: "webview", data: r })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof G == "function" ? G : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, toc: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, n, i, s, h, g, w, S, T, I, N, q, _, U, W, Z, it) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = t("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function G(r) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, v.toc(r)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, o, d, v;
                                                    return __generator(this, function (_b) {
                                                        k = "https://101kks.com";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        o = { tabs: { 完本: "/novels/full/0_{p}.html", 分類: "/novels/class/0_{p}.html", 熱門: "/novels/hot" }, search: "/search/{q}/{p}.html", ch_list: "li a[href*='/txt/']", item: "#article_list_content > li", title: "h3", link: "a[href*='/book/']@href", cover: "img@img", desc: "h4", pageSize: 8, d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content", d_author: "meta[property=og:novel:author]@content", d_desc: "meta[property=og:description]@content", d_status: "meta[property=og:novel:status]@content", ch_rewrite: ["/book/(\\d+)\\.html.*$", "/ajax_novels/chapterlist/$1.html"], content: "#txtcontent", c_title: "h1" }, d = { img: function (r) { if (!r)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < a.length; c++) {
                                                                var l = r.attr(a[c]);
                                                                if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                                    return d.fix(l.trim());
                                                            } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? k + r : k + "/" + r) : ""; }, text: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < a.length)) return [3, 4];
                                                                            return [4, r.select(a[c]).text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, l.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            c = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (l in a.headers)
                                                                                    c[l] = a.headers[l];
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 1:
                                                                            f = _c.sent(), p = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = f && f.status === 429 && p < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(f)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, T(1500 * (p + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 6:
                                                                            f = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            p++;
                                                                            return [3, 2];
                                                                        case 8: return [2, f];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var a = parseInt(r || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (r, a) { return r ? String(d.page(a) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, v = { pick: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m, y, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !r)
                                                                                return [2, ""];
                                                                            c = String(a).split(" || "), l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < c.length)) return [3, 9];
                                                                            f = c[l], p = "text", b = f.lastIndexOf("@");
                                                                            b > 0 && !/\[[^\]]*@/.test(f.slice(b)) && (p = f.slice(b + 1), f = f.slice(0, b));
                                                                            x = f === ":self" ? null : r.select(f), m = f === ":self" ? r : x.size() ? x.first() : null;
                                                                            if (!m) return [3, 8];
                                                                            if (!(p === "text")) return [3, 3];
                                                                            return [4, m.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(p === "html")) return [3, 5];
                                                                            return [4, m.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = p === "img" ? d.img(m.is("img") ? m : m.select("img").first()) : p === "own" ? m.ownText() : m.attr(p);
                                                                            _d.label = 6;
                                                                        case 6:
                                                                            _b = _c;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            y = _b;
                                                                            if (y)
                                                                                return [2, String(y).trim()];
                                                                            _d.label = 8;
                                                                        case 8:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (r, a, c) { var l = d.page(a), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, b) { return l > 1 ? b : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(c || "")).replace(/\{base\}/g, k), d.fix(f); }, items: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, b, x, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                a = r.select(o.item), c = [], l = {}, f = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(f < a.size())) return [3, 9];
                                                                                return [4, a.get(f)];
                                                                            case 2:
                                                                                p = _g.sent();
                                                                                return [4, v.pick(p, o.link || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || l[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, v.pick(p, o.title || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                x = _g.sent();
                                                                                _b = x;
                                                                                if (!_b) return [3, 7];
                                                                                l[b] = 1;
                                                                                _d = (_c = c).push;
                                                                                _f = { name: x, link: d.fix(b) };
                                                                                return [4, v.pick(p, o.cover || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, v.pick(p, o.desc || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                f++;
                                                                                return [3, 1];
                                                                            case 9: return [2, c];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (r, a, c) {
                                                                return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(v.url(r, a, c), o.req)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l)];
                                                                        case 2:
                                                                            f = _b.sent(), p = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                            return [2, s.success(f, d.next(p && f.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = o.tabs && o.tabs[r] || r;
                                                                            return [4, v.listPage(c, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            c = d.fix(r);
                                                                            return [4, v.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2: return [4, v.listPage(o.search, a, r)];
                                                                        case 3: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var r, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.genre)
                                                                                return [2, s.success([])];
                                                                            return [4, d.html(d.fix(o.genrePage || "/"))];
                                                                        case 1:
                                                                            r = _b.sent();
                                                                            return [4, H(r.select(o.genre), function (c) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, c.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, s.success(a.filter(function (c) { return c.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(r, o.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!o.d_genres) return [3, 3];
                                                                                return [4, H(a.select(o.d_genres), function (f) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, f.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                _b = _j.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = [];
                                                                                _j.label = 4;
                                                                            case 4:
                                                                                c = _b;
                                                                                return [4, v.pick(a, o.d_status)];
                                                                            case 5:
                                                                                l = _j.sent();
                                                                                _d = (_c = s).success;
                                                                                _h = {};
                                                                                return [4, v.pick(a, o.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, v.pick(a, o.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, v.pick(a, o.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, v.pick(a, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = c, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, _b, b, x, m, y, A, _c, _d, _f, _g, L, M, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!o.ch_action) return [3, 2];
                                                                                return [4, v.actionToc(r)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (o.single)
                                                                                    return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: r, host: k }])];
                                                                                a = [r], c = [], l = {};
                                                                                return [4, d.html(o.ch_rewrite ? r.replace(new RegExp(o.ch_rewrite[0]), o.ch_rewrite[1]) : r, o.req)];
                                                                            case 3:
                                                                                f = _k.sent();
                                                                                if (!o.ch_url) return [3, 7];
                                                                                return [4, v.pick(f, o.ch_url)];
                                                                            case 4:
                                                                                p = _k.sent();
                                                                                _b = p;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(p), o.req)];
                                                                            case 5:
                                                                                _b = (f = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                b = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(b < (o.ch_maxPages || 60))) return [3, 22];
                                                                                x = f.select(o.ch_list), m = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(m < x.size())) return [3, 17];
                                                                                return [4, x.get(m)];
                                                                            case 10:
                                                                                y = _k.sent(), A = y.attr("href") || y.attr("data-href");
                                                                                _c = !A || A === "#" || l[A];
                                                                                if (_c) return [3, 15];
                                                                                l[A] = 1;
                                                                                _f = (_d = c).push;
                                                                                _j = {};
                                                                                if (!o.ch_name) return [3, 12];
                                                                                return [4, v.pick(y, o.ch_name)];
                                                                            case 11:
                                                                                _g = _k.sent();
                                                                                return [3, 14];
                                                                            case 12: return [4, y.text()];
                                                                            case 13:
                                                                                _g = _k.sent();
                                                                                _k.label = 14;
                                                                            case 14:
                                                                                _c = (_f.apply(_d, [(_j.name = (_g) || y.attr("title"), _j.url = d.fix(A), _j.host = k, _j)]));
                                                                                _k.label = 15;
                                                                            case 15:
                                                                                _c;
                                                                                _k.label = 16;
                                                                            case 16:
                                                                                m++;
                                                                                return [3, 9];
                                                                            case 17:
                                                                                L = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                                if (!L || !L.attr("href"))
                                                                                    return [3, 22];
                                                                                M = d.fix(L.attr("href"));
                                                                                if (a.indexOf(M) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(M);
                                                                                _h = o.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(o.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(M, o.req)];
                                                                            case 20:
                                                                                f = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                b++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (o.ch_reverse && c.reverse(), s.success(c))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, f, p, b, x, m, _b, _c, y, A; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            a = [], c = [r], l = r, f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                            return [4, d.html(l, o.req)];
                                                                        case 2:
                                                                            p = _d.sent(), b = p.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), x = 0;
                                                                            _d.label = 3;
                                                                        case 3:
                                                                            if (!(x < b.size())) return [3, 6];
                                                                            _c = (_b = d).img;
                                                                            return [4, b.get(x)];
                                                                        case 4:
                                                                            m = _c.apply(_b, [_d.sent()]);
                                                                            m && a.indexOf(m) < 0 && a.push(m);
                                                                            _d.label = 5;
                                                                        case 5:
                                                                            x++;
                                                                            return [3, 3];
                                                                        case 6:
                                                                            if (!o.pages_next)
                                                                                return [3, 8];
                                                                            y = p.select(o.pages_next).first();
                                                                            if (!y)
                                                                                return [3, 8];
                                                                            A = d.fix(y.attr("href"));
                                                                            if (!A || c.indexOf(A) >= 0)
                                                                                return [3, 8];
                                                                            c.push(A), l = A;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 8: return [2, s.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, _b, _c, l, f, p, _d, _f, _g, b, x, _h, _j, _k, _l, _m, _o; return __generator(this, function (_p) {
                                                                    switch (_p.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_p.sent(), r])];
                                                                        case 2:
                                                                            a = _p.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            c = (_p.sent()) || "";
                                                                            if (!o.content_rsc) return [3, 5];
                                                                            l = v.rscText(c), f = o.c_locked && new RegExp(o.c_locked, "i").test(c), p = f ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(l || f)) return [3, 5];
                                                                            _f = (_d = s).success;
                                                                            _g = [v.toParas(l) + p];
                                                                            return [4, v.pick(i.parse(c, r), o.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_p.sent()]))];
                                                                        case 5:
                                                                            b = i.parse(c, r), x = b.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!x) return [3, 7];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(c.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _j = (_h = s).error;
                                                                            _k = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, v.pick(b, "title")];
                                                                        case 6: return [2, _j.apply(_h, [_k + ((_p.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + c.length + " ký tự)" + (c.length < 400 ? ": " + c.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 7:
                                                                            _m = (_l = s).success;
                                                                            return [4, d.cleanContent(x)];
                                                                        case 8:
                                                                            _o = [_p.sent()];
                                                                            return [4, v.pick(b, o.c_title || "h1 || h2")];
                                                                        case 9: return [2, _m.apply(_l, _o.concat([_p.sent()]))];
                                                                    }
                                                                }); });
                                                            }, rscAction: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (c = [], f = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; l = f.exec(r);)
                                                                                c.indexOf(l[0]) < 0 && c.push(l[0]);
                                                                            p = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), b = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(b < c.length && b < 60)) return [3, 5];
                                                                            return [4, d.get(k + c[b])];
                                                                        case 2:
                                                                            x = _d.sent();
                                                                            if (!!(!x || !x.ok)) return [3, 4];
                                                                            _c = (_b = p).exec;
                                                                            return [4, x.text()];
                                                                        case 3:
                                                                            m = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (m)
                                                                                return [2, m[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            b++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (r) {
                                                                for (var a = String(r || "").split("\n"), c = 0; c < a.length; c++) {
                                                                    var l = /^[0-9a-f]+:(\[.*)$/.exec(a[c]);
                                                                    if (l)
                                                                        try {
                                                                            var f = JSON.parse(l[1]);
                                                                            if (f && f.length)
                                                                                return f;
                                                                        }
                                                                        catch (p) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, _b, _c, f, p, b, _d, x, _f, m; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = o.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), r])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            c = (_g.sent()) || "", l = new RegExp(a.arg).exec(c);
                                                                            if (!l)
                                                                                return [2, s.error("Không tìm thấy mã truyện trên trang " + r)];
                                                                            f = JSON.stringify([l[1]]), p = function (y) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(r, { method: "POST", headers: { "Next-Action": y, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: f })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = v).rscArray;
                                                                                            return [4, A.text()];
                                                                                        case 2:
                                                                                            _b = _d.apply(_c, [_f.sent()]);
                                                                                            return [3, 4];
                                                                                        case 3:
                                                                                            _b = null;
                                                                                            _f.label = 4;
                                                                                        case 4: return [2, _b];
                                                                                    }
                                                                                }); });
                                                                            };
                                                                            if (!a.id) return [3, 5];
                                                                            return [4, p(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            b = _d;
                                                                            if (!!b) return [3, 10];
                                                                            return [4, v.rscAction(c, a.name)];
                                                                        case 7:
                                                                            x = _g.sent();
                                                                            _f = x && x !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, p(x)];
                                                                        case 8:
                                                                            _f = (b = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!b)
                                                                                return [2, s.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            m = r.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, s.success(b.map(function (y) { return { name: String(y[a.title || "label"] || "") + (a.lock && y[a.lock] ? " 🔒" : ""), url: m + "/" + y[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (r) { for (var a = "", c, l = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; c = l.exec(r);)
                                                                try {
                                                                    a += JSON.parse(c[1]);
                                                                }
                                                                catch (M) { } for (var f = "", p = /([0-9a-f]+):T([0-9a-f]+),/g, b; b = p.exec(a);) {
                                                                for (var x = parseInt(b[2], 16), m = p.lastIndex, y = 0; m < a.length && y < x;) {
                                                                    var A = a.charCodeAt(m);
                                                                    A < 128 ? y += 1 : A < 2048 ? y += 2 : A >= 55296 && A <= 56319 ? (y += 4, m++) : y += 3, m++;
                                                                }
                                                                var L = a.slice(p.lastIndex, m);
                                                                L.length > f.length && (f = L), p.lastIndex = m;
                                                            } return f; }, toParas: function (r) { return /<p[\s>]|<br\s*\/?>/i.test(r) ? r : r.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.servers)
                                                                                return [2, s.success([{ title: "Server", data: r }])];
                                                                            return [4, d.html(r, o.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, H(a.select(o.servers), function (l) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var f;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, v.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    f = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, l.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            c = (_b.sent()).filter(function (l) { return l.data; });
                                                                            return [2, s.success(c.length ? c : [{ title: "Server", data: r }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var a = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                                return [2, s.success({ type: "native", data: r, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(r)];
                                                                        case 1:
                                                                            c = _b.sent();
                                                                            return [4, c.text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (!(o.video && !a)) return [3, 4];
                                                                            return [4, v.pick(i.parse(l, r), o.video)];
                                                                        case 3:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            p = v.sniff(l);
                                                                            if (p)
                                                                                return [2, s.success({ type: "native", data: p, headers: { Referer: a ? r : k + "/" } })];
                                                                            b = i.parse(l, r), x = b.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(x && a < 2)) return [3, 6];
                                                                            m = d.fix(x.attr("src") || x.attr("data-src"));
                                                                            if (!m) return [3, 6];
                                                                            return [4, v.track(m, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, s.success({ type: "webview", data: r })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof G == "function" ? G : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, chap: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, n, i, s, h, g, w, S, T, I, N, q, _, U, W, Z, it) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = t("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function G(r) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, v.text(r)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, o, d, v;
                                                    return __generator(this, function (_b) {
                                                        k = "https://101kks.com";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        o = { tabs: { 完本: "/novels/full/0_{p}.html", 分類: "/novels/class/0_{p}.html", 熱門: "/novels/hot" }, search: "/search/{q}/{p}.html", ch_list: "li a[href*='/txt/']", item: "#article_list_content > li", title: "h3", link: "a[href*='/book/']@href", cover: "img@img", desc: "h4", pageSize: 8, d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content", d_author: "meta[property=og:novel:author]@content", d_desc: "meta[property=og:description]@content", d_status: "meta[property=og:novel:status]@content", ch_rewrite: ["/book/(\\d+)\\.html.*$", "/ajax_novels/chapterlist/$1.html"], content: "#txtcontent", c_title: "h1" }, d = { img: function (r) { if (!r)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < a.length; c++) {
                                                                var l = r.attr(a[c]);
                                                                if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                                    return d.fix(l.trim());
                                                            } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? k + r : k + "/" + r) : ""; }, text: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < a.length)) return [3, 4];
                                                                            return [4, r.select(a[c]).text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, l.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            c = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (l in a.headers)
                                                                                    c[l] = a.headers[l];
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 1:
                                                                            f = _c.sent(), p = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = f && f.status === 429 && p < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(f)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, T(1500 * (p + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 6:
                                                                            f = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            p++;
                                                                            return [3, 2];
                                                                        case 8: return [2, f];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var a = parseInt(r || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (r, a) { return r ? String(d.page(a) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, v = { pick: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m, y, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !r)
                                                                                return [2, ""];
                                                                            c = String(a).split(" || "), l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < c.length)) return [3, 9];
                                                                            f = c[l], p = "text", b = f.lastIndexOf("@");
                                                                            b > 0 && !/\[[^\]]*@/.test(f.slice(b)) && (p = f.slice(b + 1), f = f.slice(0, b));
                                                                            x = f === ":self" ? null : r.select(f), m = f === ":self" ? r : x.size() ? x.first() : null;
                                                                            if (!m) return [3, 8];
                                                                            if (!(p === "text")) return [3, 3];
                                                                            return [4, m.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(p === "html")) return [3, 5];
                                                                            return [4, m.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = p === "img" ? d.img(m.is("img") ? m : m.select("img").first()) : p === "own" ? m.ownText() : m.attr(p);
                                                                            _d.label = 6;
                                                                        case 6:
                                                                            _b = _c;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            y = _b;
                                                                            if (y)
                                                                                return [2, String(y).trim()];
                                                                            _d.label = 8;
                                                                        case 8:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (r, a, c) { var l = d.page(a), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, b) { return l > 1 ? b : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(c || "")).replace(/\{base\}/g, k), d.fix(f); }, items: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, b, x, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                a = r.select(o.item), c = [], l = {}, f = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(f < a.size())) return [3, 9];
                                                                                return [4, a.get(f)];
                                                                            case 2:
                                                                                p = _g.sent();
                                                                                return [4, v.pick(p, o.link || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || l[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, v.pick(p, o.title || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                x = _g.sent();
                                                                                _b = x;
                                                                                if (!_b) return [3, 7];
                                                                                l[b] = 1;
                                                                                _d = (_c = c).push;
                                                                                _f = { name: x, link: d.fix(b) };
                                                                                return [4, v.pick(p, o.cover || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, v.pick(p, o.desc || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                f++;
                                                                                return [3, 1];
                                                                            case 9: return [2, c];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (r, a, c) {
                                                                return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(v.url(r, a, c), o.req)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l)];
                                                                        case 2:
                                                                            f = _b.sent(), p = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                            return [2, s.success(f, d.next(p && f.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = o.tabs && o.tabs[r] || r;
                                                                            return [4, v.listPage(c, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            c = d.fix(r);
                                                                            return [4, v.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2: return [4, v.listPage(o.search, a, r)];
                                                                        case 3: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var r, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.genre)
                                                                                return [2, s.success([])];
                                                                            return [4, d.html(d.fix(o.genrePage || "/"))];
                                                                        case 1:
                                                                            r = _b.sent();
                                                                            return [4, H(r.select(o.genre), function (c) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, c.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, s.success(a.filter(function (c) { return c.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(r, o.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!o.d_genres) return [3, 3];
                                                                                return [4, H(a.select(o.d_genres), function (f) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, f.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                _b = _j.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = [];
                                                                                _j.label = 4;
                                                                            case 4:
                                                                                c = _b;
                                                                                return [4, v.pick(a, o.d_status)];
                                                                            case 5:
                                                                                l = _j.sent();
                                                                                _d = (_c = s).success;
                                                                                _h = {};
                                                                                return [4, v.pick(a, o.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, v.pick(a, o.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, v.pick(a, o.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, v.pick(a, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = c, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, _b, b, x, m, y, A, _c, _d, _f, _g, L, M, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!o.ch_action) return [3, 2];
                                                                                return [4, v.actionToc(r)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (o.single)
                                                                                    return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: r, host: k }])];
                                                                                a = [r], c = [], l = {};
                                                                                return [4, d.html(o.ch_rewrite ? r.replace(new RegExp(o.ch_rewrite[0]), o.ch_rewrite[1]) : r, o.req)];
                                                                            case 3:
                                                                                f = _k.sent();
                                                                                if (!o.ch_url) return [3, 7];
                                                                                return [4, v.pick(f, o.ch_url)];
                                                                            case 4:
                                                                                p = _k.sent();
                                                                                _b = p;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(p), o.req)];
                                                                            case 5:
                                                                                _b = (f = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                b = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(b < (o.ch_maxPages || 60))) return [3, 22];
                                                                                x = f.select(o.ch_list), m = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(m < x.size())) return [3, 17];
                                                                                return [4, x.get(m)];
                                                                            case 10:
                                                                                y = _k.sent(), A = y.attr("href") || y.attr("data-href");
                                                                                _c = !A || A === "#" || l[A];
                                                                                if (_c) return [3, 15];
                                                                                l[A] = 1;
                                                                                _f = (_d = c).push;
                                                                                _j = {};
                                                                                if (!o.ch_name) return [3, 12];
                                                                                return [4, v.pick(y, o.ch_name)];
                                                                            case 11:
                                                                                _g = _k.sent();
                                                                                return [3, 14];
                                                                            case 12: return [4, y.text()];
                                                                            case 13:
                                                                                _g = _k.sent();
                                                                                _k.label = 14;
                                                                            case 14:
                                                                                _c = (_f.apply(_d, [(_j.name = (_g) || y.attr("title"), _j.url = d.fix(A), _j.host = k, _j)]));
                                                                                _k.label = 15;
                                                                            case 15:
                                                                                _c;
                                                                                _k.label = 16;
                                                                            case 16:
                                                                                m++;
                                                                                return [3, 9];
                                                                            case 17:
                                                                                L = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                                if (!L || !L.attr("href"))
                                                                                    return [3, 22];
                                                                                M = d.fix(L.attr("href"));
                                                                                if (a.indexOf(M) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(M);
                                                                                _h = o.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(o.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(M, o.req)];
                                                                            case 20:
                                                                                f = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                b++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (o.ch_reverse && c.reverse(), s.success(c))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, f, p, b, x, m, _b, _c, y, A; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            a = [], c = [r], l = r, f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                            return [4, d.html(l, o.req)];
                                                                        case 2:
                                                                            p = _d.sent(), b = p.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), x = 0;
                                                                            _d.label = 3;
                                                                        case 3:
                                                                            if (!(x < b.size())) return [3, 6];
                                                                            _c = (_b = d).img;
                                                                            return [4, b.get(x)];
                                                                        case 4:
                                                                            m = _c.apply(_b, [_d.sent()]);
                                                                            m && a.indexOf(m) < 0 && a.push(m);
                                                                            _d.label = 5;
                                                                        case 5:
                                                                            x++;
                                                                            return [3, 3];
                                                                        case 6:
                                                                            if (!o.pages_next)
                                                                                return [3, 8];
                                                                            y = p.select(o.pages_next).first();
                                                                            if (!y)
                                                                                return [3, 8];
                                                                            A = d.fix(y.attr("href"));
                                                                            if (!A || c.indexOf(A) >= 0)
                                                                                return [3, 8];
                                                                            c.push(A), l = A;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 8: return [2, s.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, _b, _c, l, f, p, _d, _f, _g, b, x, _h, _j, _k, _l, _m, _o; return __generator(this, function (_p) {
                                                                    switch (_p.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_p.sent(), r])];
                                                                        case 2:
                                                                            a = _p.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            c = (_p.sent()) || "";
                                                                            if (!o.content_rsc) return [3, 5];
                                                                            l = v.rscText(c), f = o.c_locked && new RegExp(o.c_locked, "i").test(c), p = f ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(l || f)) return [3, 5];
                                                                            _f = (_d = s).success;
                                                                            _g = [v.toParas(l) + p];
                                                                            return [4, v.pick(i.parse(c, r), o.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_p.sent()]))];
                                                                        case 5:
                                                                            b = i.parse(c, r), x = b.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!x) return [3, 7];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(c.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _j = (_h = s).error;
                                                                            _k = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, v.pick(b, "title")];
                                                                        case 6: return [2, _j.apply(_h, [_k + ((_p.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + c.length + " ký tự)" + (c.length < 400 ? ": " + c.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 7:
                                                                            _m = (_l = s).success;
                                                                            return [4, d.cleanContent(x)];
                                                                        case 8:
                                                                            _o = [_p.sent()];
                                                                            return [4, v.pick(b, o.c_title || "h1 || h2")];
                                                                        case 9: return [2, _m.apply(_l, _o.concat([_p.sent()]))];
                                                                    }
                                                                }); });
                                                            }, rscAction: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (c = [], f = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; l = f.exec(r);)
                                                                                c.indexOf(l[0]) < 0 && c.push(l[0]);
                                                                            p = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), b = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(b < c.length && b < 60)) return [3, 5];
                                                                            return [4, d.get(k + c[b])];
                                                                        case 2:
                                                                            x = _d.sent();
                                                                            if (!!(!x || !x.ok)) return [3, 4];
                                                                            _c = (_b = p).exec;
                                                                            return [4, x.text()];
                                                                        case 3:
                                                                            m = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (m)
                                                                                return [2, m[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            b++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (r) {
                                                                for (var a = String(r || "").split("\n"), c = 0; c < a.length; c++) {
                                                                    var l = /^[0-9a-f]+:(\[.*)$/.exec(a[c]);
                                                                    if (l)
                                                                        try {
                                                                            var f = JSON.parse(l[1]);
                                                                            if (f && f.length)
                                                                                return f;
                                                                        }
                                                                        catch (p) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, _b, _c, f, p, b, _d, x, _f, m; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = o.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), r])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            c = (_g.sent()) || "", l = new RegExp(a.arg).exec(c);
                                                                            if (!l)
                                                                                return [2, s.error("Không tìm thấy mã truyện trên trang " + r)];
                                                                            f = JSON.stringify([l[1]]), p = function (y) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(r, { method: "POST", headers: { "Next-Action": y, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: f })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = v).rscArray;
                                                                                            return [4, A.text()];
                                                                                        case 2:
                                                                                            _b = _d.apply(_c, [_f.sent()]);
                                                                                            return [3, 4];
                                                                                        case 3:
                                                                                            _b = null;
                                                                                            _f.label = 4;
                                                                                        case 4: return [2, _b];
                                                                                    }
                                                                                }); });
                                                                            };
                                                                            if (!a.id) return [3, 5];
                                                                            return [4, p(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            b = _d;
                                                                            if (!!b) return [3, 10];
                                                                            return [4, v.rscAction(c, a.name)];
                                                                        case 7:
                                                                            x = _g.sent();
                                                                            _f = x && x !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, p(x)];
                                                                        case 8:
                                                                            _f = (b = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!b)
                                                                                return [2, s.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            m = r.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, s.success(b.map(function (y) { return { name: String(y[a.title || "label"] || "") + (a.lock && y[a.lock] ? " 🔒" : ""), url: m + "/" + y[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (r) { for (var a = "", c, l = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; c = l.exec(r);)
                                                                try {
                                                                    a += JSON.parse(c[1]);
                                                                }
                                                                catch (M) { } for (var f = "", p = /([0-9a-f]+):T([0-9a-f]+),/g, b; b = p.exec(a);) {
                                                                for (var x = parseInt(b[2], 16), m = p.lastIndex, y = 0; m < a.length && y < x;) {
                                                                    var A = a.charCodeAt(m);
                                                                    A < 128 ? y += 1 : A < 2048 ? y += 2 : A >= 55296 && A <= 56319 ? (y += 4, m++) : y += 3, m++;
                                                                }
                                                                var L = a.slice(p.lastIndex, m);
                                                                L.length > f.length && (f = L), p.lastIndex = m;
                                                            } return f; }, toParas: function (r) { return /<p[\s>]|<br\s*\/?>/i.test(r) ? r : r.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.servers)
                                                                                return [2, s.success([{ title: "Server", data: r }])];
                                                                            return [4, d.html(r, o.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, H(a.select(o.servers), function (l) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var f;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, v.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    f = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, l.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            c = (_b.sent()).filter(function (l) { return l.data; });
                                                                            return [2, s.success(c.length ? c : [{ title: "Server", data: r }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var a = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                                return [2, s.success({ type: "native", data: r, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(r)];
                                                                        case 1:
                                                                            c = _b.sent();
                                                                            return [4, c.text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (!(o.video && !a)) return [3, 4];
                                                                            return [4, v.pick(i.parse(l, r), o.video)];
                                                                        case 3:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            p = v.sniff(l);
                                                                            if (p)
                                                                                return [2, s.success({ type: "native", data: p, headers: { Referer: a ? r : k + "/" } })];
                                                                            b = i.parse(l, r), x = b.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(x && a < 2)) return [3, 6];
                                                                            m = d.fix(x.attr("src") || x.attr("data-src"));
                                                                            if (!m) return [3, 6];
                                                                            return [4, v.track(m, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, s.success({ type: "webview", data: r })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof G == "function" ? G : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, browse: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, n, i, s, h, g, w, S, T, I, N, q, _, U, W, Z, it) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = t("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function G(r, a) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, v.browse(r, a)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, o, d, v;
                                                    return __generator(this, function (_b) {
                                                        k = "https://101kks.com";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        o = { tabs: { 完本: "/novels/full/0_{p}.html", 分類: "/novels/class/0_{p}.html", 熱門: "/novels/hot" }, search: "/search/{q}/{p}.html", ch_list: "li a[href*='/txt/']", item: "#article_list_content > li", title: "h3", link: "a[href*='/book/']@href", cover: "img@img", desc: "h4", pageSize: 8, d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content", d_author: "meta[property=og:novel:author]@content", d_desc: "meta[property=og:description]@content", d_status: "meta[property=og:novel:status]@content", ch_rewrite: ["/book/(\\d+)\\.html.*$", "/ajax_novels/chapterlist/$1.html"], content: "#txtcontent", c_title: "h1" }, d = { img: function (r) { if (!r)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < a.length; c++) {
                                                                var l = r.attr(a[c]);
                                                                if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                                    return d.fix(l.trim());
                                                            } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? k + r : k + "/" + r) : ""; }, text: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < a.length)) return [3, 4];
                                                                            return [4, r.select(a[c]).text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, l.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            c = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (l in a.headers)
                                                                                    c[l] = a.headers[l];
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 1:
                                                                            f = _c.sent(), p = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = f && f.status === 429 && p < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(f)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, T(1500 * (p + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 6:
                                                                            f = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            p++;
                                                                            return [3, 2];
                                                                        case 8: return [2, f];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var a = parseInt(r || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (r, a) { return r ? String(d.page(a) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, v = { pick: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m, y, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !r)
                                                                                return [2, ""];
                                                                            c = String(a).split(" || "), l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < c.length)) return [3, 9];
                                                                            f = c[l], p = "text", b = f.lastIndexOf("@");
                                                                            b > 0 && !/\[[^\]]*@/.test(f.slice(b)) && (p = f.slice(b + 1), f = f.slice(0, b));
                                                                            x = f === ":self" ? null : r.select(f), m = f === ":self" ? r : x.size() ? x.first() : null;
                                                                            if (!m) return [3, 8];
                                                                            if (!(p === "text")) return [3, 3];
                                                                            return [4, m.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(p === "html")) return [3, 5];
                                                                            return [4, m.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = p === "img" ? d.img(m.is("img") ? m : m.select("img").first()) : p === "own" ? m.ownText() : m.attr(p);
                                                                            _d.label = 6;
                                                                        case 6:
                                                                            _b = _c;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            y = _b;
                                                                            if (y)
                                                                                return [2, String(y).trim()];
                                                                            _d.label = 8;
                                                                        case 8:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (r, a, c) { var l = d.page(a), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, b) { return l > 1 ? b : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(c || "")).replace(/\{base\}/g, k), d.fix(f); }, items: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, b, x, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                a = r.select(o.item), c = [], l = {}, f = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(f < a.size())) return [3, 9];
                                                                                return [4, a.get(f)];
                                                                            case 2:
                                                                                p = _g.sent();
                                                                                return [4, v.pick(p, o.link || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || l[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, v.pick(p, o.title || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                x = _g.sent();
                                                                                _b = x;
                                                                                if (!_b) return [3, 7];
                                                                                l[b] = 1;
                                                                                _d = (_c = c).push;
                                                                                _f = { name: x, link: d.fix(b) };
                                                                                return [4, v.pick(p, o.cover || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, v.pick(p, o.desc || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                f++;
                                                                                return [3, 1];
                                                                            case 9: return [2, c];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (r, a, c) {
                                                                return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(v.url(r, a, c), o.req)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l)];
                                                                        case 2:
                                                                            f = _b.sent(), p = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                            return [2, s.success(f, d.next(p && f.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = o.tabs && o.tabs[r] || r;
                                                                            return [4, v.listPage(c, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            c = d.fix(r);
                                                                            return [4, v.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2: return [4, v.listPage(o.search, a, r)];
                                                                        case 3: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var r, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.genre)
                                                                                return [2, s.success([])];
                                                                            return [4, d.html(d.fix(o.genrePage || "/"))];
                                                                        case 1:
                                                                            r = _b.sent();
                                                                            return [4, H(r.select(o.genre), function (c) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, c.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, s.success(a.filter(function (c) { return c.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(r, o.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!o.d_genres) return [3, 3];
                                                                                return [4, H(a.select(o.d_genres), function (f) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, f.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                _b = _j.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = [];
                                                                                _j.label = 4;
                                                                            case 4:
                                                                                c = _b;
                                                                                return [4, v.pick(a, o.d_status)];
                                                                            case 5:
                                                                                l = _j.sent();
                                                                                _d = (_c = s).success;
                                                                                _h = {};
                                                                                return [4, v.pick(a, o.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, v.pick(a, o.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, v.pick(a, o.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, v.pick(a, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = c, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, _b, b, x, m, y, A, _c, _d, _f, _g, L, M, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!o.ch_action) return [3, 2];
                                                                                return [4, v.actionToc(r)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (o.single)
                                                                                    return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: r, host: k }])];
                                                                                a = [r], c = [], l = {};
                                                                                return [4, d.html(o.ch_rewrite ? r.replace(new RegExp(o.ch_rewrite[0]), o.ch_rewrite[1]) : r, o.req)];
                                                                            case 3:
                                                                                f = _k.sent();
                                                                                if (!o.ch_url) return [3, 7];
                                                                                return [4, v.pick(f, o.ch_url)];
                                                                            case 4:
                                                                                p = _k.sent();
                                                                                _b = p;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(p), o.req)];
                                                                            case 5:
                                                                                _b = (f = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                b = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(b < (o.ch_maxPages || 60))) return [3, 22];
                                                                                x = f.select(o.ch_list), m = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(m < x.size())) return [3, 17];
                                                                                return [4, x.get(m)];
                                                                            case 10:
                                                                                y = _k.sent(), A = y.attr("href") || y.attr("data-href");
                                                                                _c = !A || A === "#" || l[A];
                                                                                if (_c) return [3, 15];
                                                                                l[A] = 1;
                                                                                _f = (_d = c).push;
                                                                                _j = {};
                                                                                if (!o.ch_name) return [3, 12];
                                                                                return [4, v.pick(y, o.ch_name)];
                                                                            case 11:
                                                                                _g = _k.sent();
                                                                                return [3, 14];
                                                                            case 12: return [4, y.text()];
                                                                            case 13:
                                                                                _g = _k.sent();
                                                                                _k.label = 14;
                                                                            case 14:
                                                                                _c = (_f.apply(_d, [(_j.name = (_g) || y.attr("title"), _j.url = d.fix(A), _j.host = k, _j)]));
                                                                                _k.label = 15;
                                                                            case 15:
                                                                                _c;
                                                                                _k.label = 16;
                                                                            case 16:
                                                                                m++;
                                                                                return [3, 9];
                                                                            case 17:
                                                                                L = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                                if (!L || !L.attr("href"))
                                                                                    return [3, 22];
                                                                                M = d.fix(L.attr("href"));
                                                                                if (a.indexOf(M) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(M);
                                                                                _h = o.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(o.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(M, o.req)];
                                                                            case 20:
                                                                                f = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                b++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (o.ch_reverse && c.reverse(), s.success(c))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, f, p, b, x, m, _b, _c, y, A; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            a = [], c = [r], l = r, f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                            return [4, d.html(l, o.req)];
                                                                        case 2:
                                                                            p = _d.sent(), b = p.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), x = 0;
                                                                            _d.label = 3;
                                                                        case 3:
                                                                            if (!(x < b.size())) return [3, 6];
                                                                            _c = (_b = d).img;
                                                                            return [4, b.get(x)];
                                                                        case 4:
                                                                            m = _c.apply(_b, [_d.sent()]);
                                                                            m && a.indexOf(m) < 0 && a.push(m);
                                                                            _d.label = 5;
                                                                        case 5:
                                                                            x++;
                                                                            return [3, 3];
                                                                        case 6:
                                                                            if (!o.pages_next)
                                                                                return [3, 8];
                                                                            y = p.select(o.pages_next).first();
                                                                            if (!y)
                                                                                return [3, 8];
                                                                            A = d.fix(y.attr("href"));
                                                                            if (!A || c.indexOf(A) >= 0)
                                                                                return [3, 8];
                                                                            c.push(A), l = A;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 8: return [2, s.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, _b, _c, l, f, p, _d, _f, _g, b, x, _h, _j, _k, _l, _m, _o; return __generator(this, function (_p) {
                                                                    switch (_p.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_p.sent(), r])];
                                                                        case 2:
                                                                            a = _p.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            c = (_p.sent()) || "";
                                                                            if (!o.content_rsc) return [3, 5];
                                                                            l = v.rscText(c), f = o.c_locked && new RegExp(o.c_locked, "i").test(c), p = f ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(l || f)) return [3, 5];
                                                                            _f = (_d = s).success;
                                                                            _g = [v.toParas(l) + p];
                                                                            return [4, v.pick(i.parse(c, r), o.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_p.sent()]))];
                                                                        case 5:
                                                                            b = i.parse(c, r), x = b.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!x) return [3, 7];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(c.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _j = (_h = s).error;
                                                                            _k = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, v.pick(b, "title")];
                                                                        case 6: return [2, _j.apply(_h, [_k + ((_p.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + c.length + " ký tự)" + (c.length < 400 ? ": " + c.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 7:
                                                                            _m = (_l = s).success;
                                                                            return [4, d.cleanContent(x)];
                                                                        case 8:
                                                                            _o = [_p.sent()];
                                                                            return [4, v.pick(b, o.c_title || "h1 || h2")];
                                                                        case 9: return [2, _m.apply(_l, _o.concat([_p.sent()]))];
                                                                    }
                                                                }); });
                                                            }, rscAction: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (c = [], f = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; l = f.exec(r);)
                                                                                c.indexOf(l[0]) < 0 && c.push(l[0]);
                                                                            p = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), b = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(b < c.length && b < 60)) return [3, 5];
                                                                            return [4, d.get(k + c[b])];
                                                                        case 2:
                                                                            x = _d.sent();
                                                                            if (!!(!x || !x.ok)) return [3, 4];
                                                                            _c = (_b = p).exec;
                                                                            return [4, x.text()];
                                                                        case 3:
                                                                            m = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (m)
                                                                                return [2, m[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            b++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (r) {
                                                                for (var a = String(r || "").split("\n"), c = 0; c < a.length; c++) {
                                                                    var l = /^[0-9a-f]+:(\[.*)$/.exec(a[c]);
                                                                    if (l)
                                                                        try {
                                                                            var f = JSON.parse(l[1]);
                                                                            if (f && f.length)
                                                                                return f;
                                                                        }
                                                                        catch (p) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, _b, _c, f, p, b, _d, x, _f, m; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = o.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), r])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            c = (_g.sent()) || "", l = new RegExp(a.arg).exec(c);
                                                                            if (!l)
                                                                                return [2, s.error("Không tìm thấy mã truyện trên trang " + r)];
                                                                            f = JSON.stringify([l[1]]), p = function (y) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(r, { method: "POST", headers: { "Next-Action": y, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: f })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = v).rscArray;
                                                                                            return [4, A.text()];
                                                                                        case 2:
                                                                                            _b = _d.apply(_c, [_f.sent()]);
                                                                                            return [3, 4];
                                                                                        case 3:
                                                                                            _b = null;
                                                                                            _f.label = 4;
                                                                                        case 4: return [2, _b];
                                                                                    }
                                                                                }); });
                                                                            };
                                                                            if (!a.id) return [3, 5];
                                                                            return [4, p(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            b = _d;
                                                                            if (!!b) return [3, 10];
                                                                            return [4, v.rscAction(c, a.name)];
                                                                        case 7:
                                                                            x = _g.sent();
                                                                            _f = x && x !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, p(x)];
                                                                        case 8:
                                                                            _f = (b = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!b)
                                                                                return [2, s.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            m = r.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, s.success(b.map(function (y) { return { name: String(y[a.title || "label"] || "") + (a.lock && y[a.lock] ? " 🔒" : ""), url: m + "/" + y[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (r) { for (var a = "", c, l = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; c = l.exec(r);)
                                                                try {
                                                                    a += JSON.parse(c[1]);
                                                                }
                                                                catch (M) { } for (var f = "", p = /([0-9a-f]+):T([0-9a-f]+),/g, b; b = p.exec(a);) {
                                                                for (var x = parseInt(b[2], 16), m = p.lastIndex, y = 0; m < a.length && y < x;) {
                                                                    var A = a.charCodeAt(m);
                                                                    A < 128 ? y += 1 : A < 2048 ? y += 2 : A >= 55296 && A <= 56319 ? (y += 4, m++) : y += 3, m++;
                                                                }
                                                                var L = a.slice(p.lastIndex, m);
                                                                L.length > f.length && (f = L), p.lastIndex = m;
                                                            } return f; }, toParas: function (r) { return /<p[\s>]|<br\s*\/?>/i.test(r) ? r : r.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.servers)
                                                                                return [2, s.success([{ title: "Server", data: r }])];
                                                                            return [4, d.html(r, o.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, H(a.select(o.servers), function (l) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var f;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, v.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    f = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, l.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            c = (_b.sent()).filter(function (l) { return l.data; });
                                                                            return [2, s.success(c.length ? c : [{ title: "Server", data: r }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var a = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, b, x, m; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                                return [2, s.success({ type: "native", data: r, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(r)];
                                                                        case 1:
                                                                            c = _b.sent();
                                                                            return [4, c.text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (!(o.video && !a)) return [3, 4];
                                                                            return [4, v.pick(i.parse(l, r), o.video)];
                                                                        case 3:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            p = v.sniff(l);
                                                                            if (p)
                                                                                return [2, s.success({ type: "native", data: p, headers: { Referer: a ? r : k + "/" } })];
                                                                            b = i.parse(l, r), x = b.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(x && a < 2)) return [3, 6];
                                                                            m = d.fix(x.attr("src") || x.attr("data-src"));
                                                                            if (!m) return [3, 6];
                                                                            return [4, v.track(m, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, s.success({ type: "webview", data: r })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof G == "function" ? G : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    } };
function Vr(e) { return new qe({ meta: ft, scripts: Fr, host: e }); }
var vn = require("@libs/fetch").fetchApi, Zt = null;
try {
    Zt = require("@libs/storage");
}
catch (e) {
    Zt = null;
}
var Nu = {}, Ce = Zt && Zt.storage ? Zt.storage : { get: function (e) { return Nu[e]; }, set: function (e, t) { Nu[e] = t; }, delete: function (e) { delete Nu[e]; } }, qu = (function () {
    function class_2() {
        var _this = this;
        this.id = ft.lnId, this.name = ft.name, this.icon = ft.lnIcon, this.site = ft.source, this.version = ft.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = Vr({ name: "LNReader", request: function (t) { return __awaiter(_this, void 0, void 0, function () {
                var u, n, i;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            u = { method: t.method, headers: t.headers };
                            t.body != null && t.method !== "GET" && (u.body = t.body);
                            return [4, vn(t.url, u)];
                        case 1:
                            n = _c.sent(), i = {};
                            try {
                                n.headers.forEach(function (s, h) { i[h] = s; });
                            }
                            catch (s) { }
                            _b = { status: n.status, url: n.url || t.url, headers: i };
                            return [4, n.text()];
                        case 2: return [2, (_b.text = _c.sent(), _b)];
                    }
                });
            }); }, storageGet: function (t) { var u = Ce.get("vb_" + t); return u == null ? null : String(u); }, storageSet: function (t, u) { u == null ? Ce.delete && Ce.delete("vb_" + t) : Ce.set("vb_" + t, String(u)); }, config: function (t) { return null; }, log: function (t) { return console.log(t); } });
    }
    class_2.prototype.popularNovels = function (t, u) {
        return __awaiter(this, void 0, void 0, function () { var _b; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(u && u.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(t)];
                case 1:
                    _b = _c.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(t)];
                case 3:
                    _b = _c.sent();
                    _c.label = 4;
                case 4: return [2, (_b).items.map(function (i) { return ({ name: i.name, path: i.link, cover: i.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (t, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.search(t, u)];
                case 1: return [2, (_b.sent()).items.map(function (i) { return ({ name: i.name, path: i.link, cover: i.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, n; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.detail(t)];
                case 1:
                    u = _b.sent();
                    return [4, this.engine.chapters(t)];
                case 2:
                    n = _b.sent();
                    return [2, { path: t, name: u.name || "Untitled", cover: u.cover, summary: u.description, author: u.author, status: u.ongoing ? "Ongoing" : "Completed", genres: u.genres.join(","), chapters: n.map(function (i, s) { return ({ name: i.name, path: i.url, chapterNumber: s + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.content(t)];
                case 1: return [2, (_b.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (t, u) { return /^https?:/i.test(t) ? t : ft.source.replace(/\/+$/, "") + "/" + String(t).replace(/^\/+/, ""); };
    return class_2;
}()), wn = new qu;

if (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;
